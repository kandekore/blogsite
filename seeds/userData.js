const { User } = require("../models");
const userData = [
  {
    name: "Bob",
    email: "bob@yahoo.com",
    password: "password",
  },
  {
    name: "Darren",
    email: "darren@kandekore.net",
    password: "password",
  },
  {
    name: "Jack",
    email: "jack@ygmail.com",
    password: " ",
  },
  {
    name: "Tommy",
    email: "tom@hotmail.com",
    password: " ",
  },
  {
    name: "Sally",
    email: "sally@yahoo.com",
    password: " ",
  },
  {
    name: "Emma",
    email: "emma@kandekore.net",
    password: " ",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
