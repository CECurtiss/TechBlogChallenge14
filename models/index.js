const User = require("./User");
const BlogPost = require("./BlogPost");
const BlogComment = require("./BlogComment");

User.hasMany(BlogPost, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(BlogComment, {
  foreignKey: "userId",
});

BlogComment.belongsTo(User, {
  foreignKey: 'userId'
})

BlogComment.belongsTo(BlogPost, {
  foreignKey: 'blogPostId',
})

BlogPost.hasMany(BlogComment, {
  foreignKey: 'blogPostId',
})


module.exports = { User, BlogPost, BlogComment };
