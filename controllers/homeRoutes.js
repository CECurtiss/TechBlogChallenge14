const router = require("express").Router();
const { BlogPost, User } = require("../models");

// get all blog posts for homepage
router.get("/", async (req, res) => {
  try {
    const homepageBlogPosts = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const allHomePageBlogPosts = homepageBlogPosts.map((blogs) =>
      blogs.get({ plain: true })
    );

    res.render("homepage", {
      allHomePageBlogPosts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
