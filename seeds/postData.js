const { Post } = require("../models");
const postData = [
  {
    id: 1,
    title: "Title Test",
    content: "Your challenge this week is to build a CMS-style blog site",
    user_id: 1,
    cat_id: 1,
  },
  {
    id: 2,
    title: "Another Test",
    content: "Writing about tech can be just as important as making it. ",
    user_id: 2,
    cat_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
