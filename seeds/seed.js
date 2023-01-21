const sequelize = require("../config/connection");
const { User, BlogPost } = require("../models");

const userData = require("./userData.json");
const blogPostsData = require("./blogPosts.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);

  await BlogPost.bulkCreate(blogPostsData);

  console.log("Database synced!");
  process.exit(0);
};

seedDatabase();
