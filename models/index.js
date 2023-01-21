const User = require("./User");
const BlogPost = require("./BlogPost");

User.hasMany(BlogPost, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, BlogPost };
