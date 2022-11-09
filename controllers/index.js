const router = require("express").Router();
const apiRoutes = require("./api");
const postRoutes = require("./api/postRoutes");

router.use("/api", apiRoutes);
// router.use("/posts", postRoutes);

const { User, Post, Categories, Comments } = require("../models");
const withAuth = require("../utils/auth");
const { findAll } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/posts", async (req, res) => {
  try {
    let postData = await Post.findAll();
    let posts = postData.map((data) => data.get({ plain: true }));

    res.render("post", { posts });
    console.log(...posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
