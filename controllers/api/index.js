const router = require("express").Router();
// const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

// const locationRoutes = require("./locationRoutes");
// const bookingRoutes = require("./bookingRoutes");

// router.use("/users", userRoutes);
router.use("/posts", postRoutes);
// router.use("/bookings", bookingRoutes);

// router.use("./location", locationRoutes);

module.exports = router;
