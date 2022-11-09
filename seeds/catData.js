const { Categories } = require("../models");
const catData = [
  {
    id: 1,
    name: "Cat Test",
  },
  {
    id: 2,
    name: "Cat 2 Test",
  },
];

const seedCategories = () => Categories.bulkCreate(catData);

module.exports = seedCategories;
