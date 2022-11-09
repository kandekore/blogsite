const { User } = require("../models");
const userData = [
  {
    name: "Baer Lanfried",
    email: "blanfried@yahoo.com",
    password: "",
  },
  {
    name: "Darren",
    email: "darren@kandekore.net",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
