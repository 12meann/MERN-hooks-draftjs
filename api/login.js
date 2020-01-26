const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post(
  "/",
  [
    check("email")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Email must not be empty"),
    check("email")
      .isEmail()
      .withMessage("Must supply a valid email"),
    check("password")
      .isLength({ min: 7 })
      .withMessage("Password must be at least 7 characters")
  ],
  async (req, res) => {
    //validate form
    const errors = validationResult(await req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      //check if user found using email
      const user = await User.findOne({ email });

      if (!user)
        return res
          .status(400)
          .json({ error: "Wrong credentials. Please try again." });

      //check if password correct
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return res
          .status(400)
          .json({ error: "Wrong credentials. Please try again." });

      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 }, //1 hour
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id
            },
            success: `You have succesfully logged in, ${user.name}.`
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
