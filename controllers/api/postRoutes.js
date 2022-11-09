const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Post, Comments, User, Categories } = require("../../models/");

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [Comments, User, Categories],
    });
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
