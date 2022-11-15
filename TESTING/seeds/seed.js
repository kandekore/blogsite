const sequelize = require("../config/connection");
// const { User, Post, Categories, Comments } = require("../models");

const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedCategories = require("./catData");
const seedComments = require("./comData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");
  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedPosts();
  console.log("\n----- POSTS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // const post = await Post.bulkCreate(postData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // const comment = await Comments.bulkCreate(comData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // const categories = await Categories.bulkCreate(catData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
