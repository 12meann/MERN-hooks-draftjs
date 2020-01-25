const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post(
  "/",
  [
    check("name")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name must not be empty"),
    check("email")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Email must not be empty"),
    check("email")
      .isEmail()
      .withMessage("Must supply a valid email"),
    check("password")
      .isLength({ min: 7 })
      .withMessage("Password must be at least 7 characters"),
    check("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords does not match.");
      }
      return true;
    }),
    check("passcode").custom((value, { req }) => {
      if (value !== process.env.ADMIN_PASSCODE) {
        throw new Error(
          "You must enter the right passcode. Contact the developer for more info."
        );
      }
      return true;
    })
  ],
  async (req, res) => {
    //validate form
    const errors = validationResult(await req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { email, password, name } = req.body;

    try {
      //check if already registered
      const oldUser = await User.findOne({ email });
      if (oldUser)
        return res.status(400).json({
          msg: "You already registered. Try logging in."
        });

      //salt and hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      //create instance of User
      const newUser = new User({
        email,
        password: hashedPassword,
        name,
        isAdmin: true
        // imageId: "socialMediaApp/avatar/no-img",
        // image:
        //   "https://res.cloudinary.com/meann/image/upload/v1568291711/socialMediaApp/avatar/no-img.png"
      });

      //save to db
      const user = await newUser.save();

      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 }, // 1 hour
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id
              // name: user.name,
              // email: user.email
              // image: user.image
            },
            success: `You have succesfully registered. Welcome, ${user.name}!`
          });
        }
      );
    } catch (err) {
      res
        .status(500)
        .json({ error: "Something went wrong. Please try again.", err });
    }
  }
);

module.exports = router;
