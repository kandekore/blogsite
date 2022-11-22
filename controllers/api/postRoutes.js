const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Post, Comments, User, Categories } = require("../../models/");
const withAuth = require("../../utils/auth");

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
router.post("/", withAuth, async (req, res) => {
  /* 
    
       { "title": "post route",
        "content": "adding a post is easy",
        
        "user_id": 1,
        "cat_id": 1,}
        */
  console.log({
    ...req.body,
    user_id: req.session.user_id,
    // user_name: req.session.user_name,
  });
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
      // user_name: req.session.user_name,
    });
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
    console.log("userid", userData.id);
    console.log(...posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })

    .then((deletedPost) => {
      res.json(deletedPost);
    })
    .catch((err) => res.json(err));
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findOne(
      {
        where: {
          id: req.params.id,
        },

        include: [Comments],
      },
      {
        allowedProtoMethods: {
          trim: true,
        },
      }
    );
    if (!postData) {
      res.status(404).json({ message: "No booking found with this id!" });
      return;
    }

    res.status(200).json({ postData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/editpost/:id", async (req, res) => {
  console.log(req.body.title);
  console.log(req.params.id);
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
