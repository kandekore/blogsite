const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Post, Categories, Comments } = require("../models");
const withAuth = require("../utils/auth");
const { findAll } = require("../models");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  try {
    let postData = await Post.findAll({
      include: [User, Categories, Comments],
    });

    let posts = postData.map((data) => data.get({ plain: true }));
    console.log("posts", posts);
    let cats = await Categories.findAll();
    let categories = cats.map((cat) => cat.get({ plain: true }));
    // let coms = await Comments.findAll({ include: [User] });
    // let comments = coms.map((com) => com.get({ plain: true }));
    let userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));
    let current = { idpst: req.session.user_id };
    res.render(
      "homepage",

      {
        users,
        posts,
        categories,
        // comments,
        current,
        logged_in: req.session.logged_in,
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/comments", withAuth, async (req, res) => {
  try {
    // let postData = await Post.findAll({
    //   include: [User, Categories, Comments],
    // });

    // let posts = postData.map((data) => data.get({ plain: true }));
    // let cats = await Categories.findAll();
    // let categories = cats.map((cat) => cat.get({ plain: true }));
    let coms = await Comments.findAll({ include: [{ model: User }] });
    let comments = coms.map((com) => com.get({ plain: true }));
    // let userData = await User.findAll();
    // let users = userData.map((user) => user.get({ plain: true }));
    let current = { idpst: req.session.user_id };
    console.log(comments);
    res.render(
      "comment",

      {
        // users,
        // posts,
        // categories,
        comments,
        // current,
        logged_in: req.session.logged_in,
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/posts/:id", withAuth, async (req, res) => {
  try {
    let postData = await Post.findAll({
      where: {
        id: req.params.id,
      },
      include: [User, Categories, Comments],
    });

    let posts = postData.map((data) => data.get({ plain: true }));
    let cats = await Categories.findAll();
    let categories = cats.map((cat) => cat.get({ plain: true }));
    let coms = await Comments.findAll({ include: [User] });
    let comments = coms.map((com) => com.get({ plain: true }));
    let userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));
    let current = { idpst: req.session.user_id };

    console.log("Comments123", comments);
    // console.log("post data", posts);

    res.status(200).render("singlepost", { posts, comments });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    let postData = await Post.findAll({
      where: {
        id: req.params.id,
      },
      include: [User, Categories, Comments],
    });

    let posts = postData.map((data) => data.get({ plain: true }));
    let cats = await Categories.findAll();
    let categories = cats.map((cat) => cat.get({ plain: true }));
    let coms = await Comments.findAll({ include: [User] });
    let comments = coms.map((com) => com.get({ plain: true }));
    let userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));
    let current = { idpst: req.session.user_id };

    console.log("Comments123", { ...categories });
    console.log("post data", posts);

    res.status(200).render("edit", { posts, categories });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/postsbyuser/:id", withAuth, async (req, res) => {
  try {
    let postData = await Post.findAll(
      {
        where: {
          user_id: req.params.id,
        },
        include: [Comments, User, Categories],
      },
      {
        allowedProtoMethods: {
          trim: true,
        },
      }
    );
    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    let userData = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    let posts = postData.map((post) => post.get({ plain: true }));
    let user = userData.map((data) => data.get({ plain: true }));
    console.log("usr", user);
    console.log("posts", posts);

    res.status(200).render("postbyuser", { posts, user, Comments });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/postsbycat/:id", withAuth, async (req, res) => {
  try {
    let postData = await Post.findAll(
      {
        where: {
          cat_id: req.params.id,
        },
        include: [Comments, User, Categories],
      },
      {
        allowedProtoMethods: {
          trim: true,
        },
      }
    );
    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    let userData = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    let posts = postData.map((post) => post.get({ plain: true }));
    let user = userData.map((data) => data.get({ plain: true }));
    console.log("usr", user);
    console.log("posts", posts);
    // res.render("post", postData);
    res.status(200).render("postbycat", { posts, user });
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

    let postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [Comments, User, Categories],
    });
    let posts = postData.map((data) => data.get({ plain: true }));

    const user = userData.get({ plain: true });

    let coms = await Comments.findAll({ include: [User] });
    let comments = coms.map((com) => com.get({ plain: true }));
    let cats = await Categories.findAll();
    let categories = cats.map((cat) => cat.get({ plain: true }));
    console.log(posts);
    // console.log(comments);

    res.render("profile", {
      ...user,
      posts,
      comments,
      categories,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/categories", withAuth, async (req, res) => {
  try {
    const allCat = await Categories.findAll();
    let cats = allCat.map((data) => data.get({ plain: true }));
    res.render("categories", { cats });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/categories", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("login");
});
module.exports = router;
