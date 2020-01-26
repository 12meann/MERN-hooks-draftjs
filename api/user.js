const express = require("express");
const router = express.Router();
const User = require("../models/User");
const isAuth = require("../middleware/isAuth");

//get currently logged in user data

router.get("/", isAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Something went wrong.Please try again later.", err });
  }
});

module.exports = router;
