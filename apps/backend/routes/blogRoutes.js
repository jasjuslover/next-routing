const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlogById,
  getSlowBlogs,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.get("/slow", getSlowBlogs);
router.get("/:id", getBlogById);

module.exports = router;
