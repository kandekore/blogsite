const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentsRoutes = require("./commentsRoutes");
const catRoutes = require("./categoriesRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentsRoutes);
router.use("/categories", catRoutes);

// router.use("./location", locationRoutes);

module.exports = router;
