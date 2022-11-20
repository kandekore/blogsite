const { Categories } = require("../models");
const catData = [
  {
    id: 1,
    catname: "Cat Test",
  },
  {
    id: 2,
    catname: "Cat 2 Test",
  },
];

const seedCategories = () => Categories.bulkCreate(catData);

module.exports = seedCategories;
