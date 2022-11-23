const { Comments } = require("../models");

const comData = [
  {
    id: 1,
    comment: "Is this better than Ninja Forms?",
    user_id: 2,
    post_id: 1,
  },
  {
    id: 2,
    comment: "Yes, much better!",
    user_id: 1,
    post_id: 1,
  },
  {
    id: 3,
    comment: "Nice Work",
    user_id: 1,
    post_id: 2,
  },
  {
    id: 4,
    comment: "Bill Gates sucks!",
    user_id: 3,
    post_id: 3,
  },
  {
    id: 5,
    comment: "How much does it cost?",
    user_id: 2,
    post_id: 4,
  },
  {
    id: 6,
    comment: "Buy Bitcoin!",
    user_id: 6,
    post_id: 5,
  },
  {
    id: 7,
    comment: "Nice Work",
    user_id: 4,
    post_id: 5,
  },
  {
    id: 8,
    comment: "What is SEO?",
    user_id: 5,
    post_id: 6,
  },
];

const seedComments = () => Comments.bulkCreate(comData);

module.exports = seedComments;
