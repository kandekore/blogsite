const router = require("express").Router();
const apiRoutes = require("./api");
// const postRoutes = require("./api/postRoutes");

router.use("/api", apiRoutes);
// router.use("/posts", postRoutes);

const { User, Post, Categories, Comments } = require("../models");
const withAuth = require("../utils/auth");
const { findAll } = require("../models");

router.get("/", async (req, res) => {
  try {
    let userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));
    let postData = await Post.findAll({
      include: [Comments, User, Categories],
    });
    let posts = postData.map((data) => data.get({ plain: true }));
    res.render(
      "homepage",

      { users, posts, logged_in: req.session.logged_in }
      // { posts }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    // const allUsers = await User.findAll({ include: [Comments, Post] });
    // res.status(200).json(allUsers);
    res.render("login");
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get("/posts", async (req, res) => {
//   try {
//     let postData = await Post.findAll({
//       include: [Comments, User, Categories],
//     });
//     let posts = postData.map((data) => data.get({ plain: true }));
//     // let commentData = await Comments.findOne(where);
//     // let comments = commentData.map((cdata) => cdata.get({ plain: true }));

//     res.render("post", { posts });
//     console.log(...posts);
//     console.log(...posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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
router.post("/comments", withAuth, async (req, res) => {
  /*
   { "comment": "Posted Comment Test",

        "user_id": 1,
        "post_id": 1}
        */
  console.log(req.body);
  try {
    const newComment = await Comments.create(req.body);
    console.log({ newComment });
    res.status(200).json(newComment);
    location.reload();
  } catch (err) {
    res.status(400).json(err);
  }
});
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
// router.get("/categories", async (req, res) => {
//   try {
//     let catData = await Categories.findAll({ include: [Post] });
//     let cats = catData.map((cdata) => cdata.get({ plain: true }));

//     res.render("categories", { cats });
//     // console.log(...categories);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/posts", withAuth, async (req, res) => {
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
router.get("/posts/:id", withAuth, async (req, res) => {
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
    console.log(postData.dataValues);
    // res.render("post", { postData });
    res.status(200).render("singlepost", postData.dataValues);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },

      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route  //

  if (req.session.logged_in) {
    res.redirect("/location");
    return;
  }

  res.render("login");
});
module.exports = router;
