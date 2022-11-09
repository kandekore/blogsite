const { Comments } = require("../models");

const comData = [
  {
    id: 1,
    comment: "Comment Test",
    user_id: 1,
    post_id: 1,
  },
  {
    id: 2,
    comment: "Another Comment",
    user_id: 1,
    post_id: 1,
  },
  {
    id: 3,
    comment: "post 2 test",
    user_id: 2,
    post_id: 2,
  },
  {
    id: 4,
    comment: "More Testing",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comments.bulkCreate(comData);

module.exports = seedComments;
