const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Post, Comments, User } = require("../../models/");
const withAuth = require("../../utils/auth");
router.get("/", async (req, res) => {
  try {
    const allComments = await Comments.findAll({ include: [Post, User] });
    res.status(200).json(allComments);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/", withAuth, async (req, res) => {
  /* 
   { "comment": "Posted Comment Test",
       
        "user_id": 1,
        "post_id": 1}
        */
  try {
    const newComment = await Comments.create(req.body);
    // console.log("content", req.body);

    res.status(200).json(newComment);
    // location.reload();
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
