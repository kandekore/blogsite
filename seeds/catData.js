const { Categories } = require("../models");
const catData = [
  {
    id: 1,
    catname: "WordPress",
  },
  {
    id: 2,
    catname: "Office 365",
  },
  {
    id: 3,
    catname: "VPNs",
  },
  {
    id: 4,
    catname: "SEO",
  },
];

const seedCategories = () => Categories.bulkCreate(catData);

module.exports = seedCategories;
