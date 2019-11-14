const express = require("express");
const router = express.Router();
const ContactForm = require("../models/ContactForm");
const { check, validationResult } = require("express-validator");

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
    check("message")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Message must not be empty"),
    check("email")
      .isEmail()
      .withMessage("Must supply a valid email")
  ],
  async (req, res) => {
    const errors = validationResult(await req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const {
      email,
      name,
      eventType,
      fromDate,
      toDate,
      hoursNeeded,
      message
    } = req.body;

    const newForm = new ContactForm({
      email,
      name,
      eventType,
      fromDate,
      toDate,
      hoursNeeded,
      message
    });
    try {
      const details = await newForm.save();
      res
        .status(201)
        .json({ success: "You have succesfully sent the form.", details });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const forms = await ContactForm.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = router;
