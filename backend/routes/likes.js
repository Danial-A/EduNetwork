const router = require('express').Router();
let Likes = require('../models/post.models');

router.route('/:id').get((req,res)=>{
    Likes.findById(req.params.id)
    .then((post)=> res.json(post.likes))
    .catch(err=>{res.status(400).json('Error: '+err)})
})

router.route('/:id').post((req,res)=>{
    const username = req.body.username;
    const newLike = new Likes({
        username
    })
    Likes.findById(req.params.id)
    .then(post => {
        post.likes.push(newLike);
        post.save()
        .then(()=> res.json("Like Added"))
        .catch(err=> res.json('Error: '+err))
    })
    .catch(err=> res.json('error: '+err))
})

module.exports = router;