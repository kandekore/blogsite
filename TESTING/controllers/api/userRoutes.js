const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const { User, Comments, Post } = require("../../models/");

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll({ include: [Comments, Post] });
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
