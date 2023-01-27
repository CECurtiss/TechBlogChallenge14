const router = require("express").Router();
const withAuth = require("../utils/auth");
const { BlogPost, User, BlogComment } = require("../models");

// find all own blog posts
router.get("/", withAuth, async (req, res) => {
  console.log('hello')
  try {
    const findAllUserPost = await BlogPost.findAll({
      where: {
        userId: req.session.user_id,
      },
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
    const listAllUserPost = findAllUserPost.map((posts) =>
      posts.get({ plain: true })
    );
    console.log(listAllUserPost)
    res.render("dashboard", {
      listAllUserPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route to load newpost
router.get("/newpost", withAuth, async (req, res) => {
  console.log('newpostadd')
  try {
    res.render("addnewpost", { username: req.session.username, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// route to load one post
router.get('/editpost/:id', withAuth, async (req, res) => {
  console.log('getbyid')
  try{
    const getAPost = await BlogPost.findOne(
      {
        where: {
          id: req.params.id,
        },
        raw:true
      })
    res.render('editordeleteview', {getAPost,
      logged_in: req.session.logged_in })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})


module.exports = router;
