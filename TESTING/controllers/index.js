const router = require("express").Router();
const apiRoutes = require("./api");
const postRoutes = require("./api/postRoutes");

router.use("/api", apiRoutes);
// router.use("/posts", postRoutes);

const { User, Post, Categories, Comments } = require("../models");
const withAuth = require("../utils/auth");
const { findAll } = require("../models");



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
