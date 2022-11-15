const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Post, Comments, User } = require("../../models/");

router.get("/comments", async (req, res) => {
  try {
    let commentData = await Comments.findAll({ include: [Post, User] });
    let comments = commentData.map((cdata) => cdata.get({ plain: true }));

    res.render("comments", { comments });
    console.log(...comments);
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/", async (req, res) => {
//   try {
//     const allComments = await Comments.findAll({ include: [Post, User] });
//     res.status(200).json(allComments);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
router.post("/", async (req, res) => {
  /* 
   { "comment": "Posted Comment Test",
       
        "user_id": 1,
        "post_id": 1}
        */
  try {
    const newComment = await Comments.create(req.body);
    console.log(newComment);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
