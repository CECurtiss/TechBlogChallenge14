const router = require('express').Router();
const { BlogPost, User } = require('../models');

// get all blog posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['userName'],
                },
            ],
        });
        const allBlogPosts = dbBlogPostData.map((blogs) =>
        blogs.get({ plain: true })
        );

        res.render('homepage', {
            allBlogPosts,
            loggedIn: req.session.loggedIn,
        })  
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
})

module.exports = router;