const router = require("express").Router();
const apiRoutes = require("./api");
const postRoutes = require("./api/postRoutes");

router.use("/api", apiRoutes);
// router.use("/posts", postRoutes);

const { User, Post, Categories, Comments } = require("../models");
const withAuth = require("../utils/auth");
const { findAll } = require("../models");

router.get("/", async (req, res) => {
  try {
    let postData = await Post.findAll({
      include: [Comments, User, Categories],
    });
    let posts = postData.map((data) => data.get({ plain: true }));
    res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
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
// router.post("/comments", async (req, res) => {
//   /*
//    { "comment": "Posted Comment Test",

//         "user_id": 1,
//         "post_id": 1}
//         */
//   try {
//     const newComment = await Comments.create(req.body);
//     console.log({ newComment });
//     res.status(200).json(newComment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
router.get("/users", async (req, res) => {
  try {
    let userData = await User.findAll({ include: [Comments, Post] });
    let users = userData.map((udata) => udata.get({ plain: true }));

    res.render("user", { users });
    console.log(...users);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/categories", async (req, res) => {
  try {
    let catData = await Categories.findAll({ include: [Post] });
    let cats = catData.map((cdata) => cdata.get({ plain: true }));

    res.render("categories", { cats });
    // console.log(...categories);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
