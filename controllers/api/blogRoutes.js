const router = require("express").Router();
const { BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

// route to get all blog posts
router.get('/', async (req, res) => {
  try {
    const allBlogPosts= await BlogPost.findAll()
  res.status(200).json(allBlogPosts)
} catch (err) {
  res.status(400).json(err)
}
})

// get one blog post
router.get('/:id', async (req, res) => {
  try {
    const oneBlogPost= await BlogPost.findOne({
      where: {
        id: req.params.id,
      }
    })
  res.status(200).json(oneBlogPost)
} catch (err) {
  res.status(400).json(err)
}
})


// route to add blog post
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.session.user_id,
      username: req.session.username
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to update blog post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateBlogPost = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updateBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete a blog post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteBlogPost = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deleteBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
