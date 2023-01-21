const router = require("express").Router();
const { BlogPost, User } = require("../models");

router.get("/", async (req, res) => {
    try {
        const findAllUserPost = await BlogPost.findAll({ 
            where: {
               userId: req.session.user_id,
            },
            include: [
                {
                model: User,
                attributes: ['username'],
                }
            ]
        })
        const listAllUserPost = findAllUserPost.map((posts) =>
        posts.get({ plain: true})
        )
        res.render('dashboard', {
           listAllUserPost,
           logged_in: req.sessionStore.logged_in 
        })
        
    }catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;