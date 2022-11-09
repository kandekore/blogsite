const User = require("./User");
const Post = require("./Post");
const Categories = require("./Categories");
const Comments = require("./Comments");

User.hasMany(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

User.hasMany(Comments, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Categories.hasMany(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Categories, Comments };
