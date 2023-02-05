const router = require("express").Router();
const withAuth = require('../utils/auth')
const { BlogPost, User, BlogComment } = require("../models");

// get all blog posts for homepage
router.get("/", async (req, res) => {
  console.log('homeroute')
  try {
    const homepageBlogPosts = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: BlogComment,
          attributes: ["content", "createdAt" ]
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
  console.log('loginhome')
  res.render("login");
});

// route for signup page
router.get("/signup", (req, res) => {
  console.log('signuphome')
  res.render("signup");
});

// get one post
router.get('/onepost/:id', withAuth, async (req, res) => {
  console.log('homebyid')
  try{
    const getAHomepagePost = await BlogPost.findOne(
      {
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: BlogComment,
            attributes: ['content', 'createdAt'],
            include: {
              model: User,
              attributes: ['username'],
            }
          }
        ],
        // raw:true
      })
      getAHomePagePost = getAHomepagePost.dataValues
    res.render('singlepost', {getAHomepagePost,
      logged_in: req.session.logged_in })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
module.exports = router;
