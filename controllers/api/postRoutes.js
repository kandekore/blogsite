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
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/posts", async (req, res) => {
  try {
    let postData = await Post.findAll({
      include: [Comments, User, Categories],
    });
    let posts = postData.map((data) => data.get({ plain: true }));
    // let commentData = await Comments.findOne(where);
    // let comments = commentData.map((cdata) => cdata.get({ plain: true }));

    res.render("post", { posts });
    console.log(...posts);
    console.log(...posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No booking found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No booking found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
