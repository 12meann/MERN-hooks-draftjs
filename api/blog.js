const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.post("/", async (req, res) => {
  const { title, body, headerImg } = req.body;
  const data = new Blog({
    title,
    body,
    headerImg
  });
  try {
    const newBlog = await data.save();
    res.status(201).json({ success: "Succesfully posted your blog", newBlog });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Blog.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
