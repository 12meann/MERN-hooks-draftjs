const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const isAuth = require("../middleware/isAuth");
const { check, validationResult } = require("express-validator");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

//for image upload
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const imageFilter = (req, file, cb) => {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only images are allowed"), false);
  }
  cb(null, true);
};
const upload = multer({
  storage: storage,
  fileFilter: imageFilter
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//post blog
router.post(
  "/",
  isAuth,
  check("title")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Title must not be empty"),
  // upload.single("image"),
  async (req, res) => {
    //validate title
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { title, body, tags, isPinned } = req.body;

    try {
      //upload photo at cloudinary
      // let result = await cloudinary.uploader.upload(req.file.path, {
      //   folder: "travelBlog/blog/headerImg"
      // });

      const data = new Blog({
        title,
        body,
        // headerImg: result.secure_url,
        // headerImgId: result.public_id,
        tags,
        isPinned
      });
      const newBlog = await data.save();
      console.log(newBlog);
      res
        .status(201)
        .json({ success: "Succesfully posted your blog", newBlog });
    } catch (error) {
      console.log(error);
      if (error.name === "ValidationError") {
        res
          .status(400)
          .json({ error: "Title and blog content must not be empty." });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }
);

//get blogs
router.get("/", async (req, res) => {
  try {
    const data = await Blog.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err, error: "Something Went Wrong" });
  }
});

// get one blog
router.get("/:blogId", async (req, res) => {
  try {
    const data = await Blog.findById(req.params.blogId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get pinned posts

// get top 10 tags

// //edit todo
// router.patch("/:id", getTodoId, isAuth, async (req, res) => {
//   try {
//     if (res.todo !== null) {
//       res.todo.todo = req.body.todo;
//     }
//     if (req.body.todo.trim() === "") {
//       return res.status(400).json({ errorMsg: "Must not be empty" });
//     }
//     const updatedTodo = await res.todo.save();
//     return res
//       .status(200)
//       .json({ success: "Successfully updated todo", updatedTodo });
//   } catch (error) {
//     return res.status(400).json({ errorMsg: "Something went wrong", error });
//   }
// });

// //delete todo

// router.delete("/:id", getTodoId, isAuth, async (req, res) => {
//   try {
//     const deletedTodo = await res.todo.remove();
//     res.status(200).json({ success: "Todo deleted", deletedTodo });
//   } catch (error) {
//     res.status(500).json({ errorMsg: "Server error", error });
//   }
// });

module.exports = router;
