const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Post } = require("../../models/");
// const withAuth = require("../../utils/auth");

// class Post extends Model {}
// const { Post } = require("../models");
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll();
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get("/posts", async (req, res) => {
//   try {
//     let postData = await Post.findAll();
//     let posts = postData.map((data) => data.get({ plain: true }));

//     res.render("");
//     console.log(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;
