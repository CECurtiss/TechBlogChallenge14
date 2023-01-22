const router = require("express").Router();
const withAuth = require('../utils/auth')
const { BlogPost, User, BlogComment } = require("../models");

// get all blog posts for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const homepageBlogPosts = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: BlogComment,
          attributes: ["content" ]
        }
      ],
    });
    const allHomePageBlogPosts = homepageBlogPosts.map((blogs) =>
      blogs.get({ plain: true })
    );

    res.render("homepage", {
      allHomePageBlogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for login page
router.get("/login", (req, res) => {
  res.render("login");
});

// route for signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
