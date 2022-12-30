const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

const userData = require('./userData.json');
const blogPostsData = require('../blogPosts.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const blogPost of blogPostsData) {
      await BlogPost.create({
        ...blogPost,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();