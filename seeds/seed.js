const sequelize = require("../config/connection");
const { User, Post, Categories, Comments } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const catData = require("./catData.json");
const comData = require("./comData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  const comment = await Comments.bulkCreate(comData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Categories.bulkCreate(catData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
