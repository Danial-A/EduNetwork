const router = require('express').Router();
let Post = require('../models/post.models');
const { route } = require('./users');

router.route('/').get((req,res)=>{
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    console.log(req.body)
    const postTitle = req.body.postTitle;
    const postDescription = req.body.postDescription;

    const newPost = new Post({
            postTitle,
            postDescription
        });
        newPost.save()
        .then(()=> res.json('Post Added!'))
        .catch(err=> res.status(400).json('Error: '+err))
    });

    router.route('/:id').get((req,res)=>{
        Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: '+err))
    })

    router.route('/:id').delete((req,res) => {
        Post.findByIdAndDelete(req.params.id)
        .then(()=>{res.json("Post Deleted")})
        .catch(err=> res.status(400).json('Error: '+err))
    });

    router.route('/update/:id').post((req,res)=>{
        Post.findById(req.params.id)
        .then(post=>{
            post.postTitle = req.body.postTitle;
            post.postDescription = req.body.postDescription;
            post.save()
            .then(()=> res.json('Post Updated'))
            .catch((err)=> res.status(400).json('Error: '+err))
        })
        .catch(err => res.status(400).json('Error: '+err))
    })


module.exports = router;