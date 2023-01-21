const router = require("express").Router();
const { BlogComment } = require("../../models");
const withAuth = require("../../utils/auth");

// route to add comment
router.post("/:id", withAuth, async (req, res) => {
    try {
      const newCommentPost = await BlogComment.create({
        where: {
            blogPostId: req.params.id,
        },
        username: req.session.username,
      });
  
      res.status(200).json(newCommentPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

module.exports = router;