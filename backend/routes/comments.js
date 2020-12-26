const router = require('express').Router()
const Post = require('../models/post.models');

router.route('/:id').get((req,res)=>{
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err=> {res.json("Error: "+err)})
})

router.route('/add/:id').post((req,res)=>{
    const comment = req.body.comment
    const username = req.body.username
    const newComment = {
        comment,
        username
    }
    Post.findById(req.params.id)
    .then(post=>{
        post.comments.push(newComment);
        post.save().then(()=>{res.json("Comment Added")})
        .catch(err=>{res.status(400).json('Error: '+err)})
    })
    .catch(err=>{
        res.json("Error: "+err)
    })
        
})

module.exports = router