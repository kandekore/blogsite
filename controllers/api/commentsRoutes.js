const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Post, Comments, User } = require("../../models/");

router.get("/", async (req, res) => {
  try {
    const allComments = await Comments.findAll({ include: [Post, User] });
    res.status(200).json(allComments);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
