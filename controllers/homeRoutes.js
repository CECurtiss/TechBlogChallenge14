const router = require('express').Router();
const { BlogPost, User } = require('../models');

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

        res.render('homepage', allBlogPosts)
    
    
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
})