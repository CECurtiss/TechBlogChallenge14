const router = require("express").Router();
const { BlogComment } = require("../../models");
const withAuth = require("../../utils/auth");

// route to add comment
router.post("/", withAuth, async (req, res) => {
    try {
      const newCommentPost = await BlogComment.create({
        blogPostId: req.body.blogPostId,
        content: req.body.content,
        userId: req.session.user_id,
      });
  
      res.status(200).json(newCommentPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // route to update comment
  router.put('/:id', withAuth, async (req,res) => {
    try {
      const updateComment = await BlogComment.update(req.body, {
        where: {
          id: req.params.id,
        }
      })
      res.status(200).json(updateComment)
    } catch (err) {
      res.status(400).json(err)
    }
  })

  // delete comment
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const deleteComment = await BlogComment.destroy({
        where: {
          id: req.params.id,
        }
      })
      res.status(200).json(deleteComment)
    } catch (err) {
      res.status(400).json(err)
    }
  })
  

module.exports = router;