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
router.post("/", async (req, res) => {
  /* 
    
       { "title": "post route",
        "content": "adding a post is easy",
        
        "user_id": 1,
        "cat_id": 1,}
        */
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
