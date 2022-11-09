const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Categories, Post } = require("../../models/");

router.get("/", async (req, res) => {
  try {
    const allCat = await Categories.findAll({ include: [Post] });
    res.status(200).json(allCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
