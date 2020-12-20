const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    postTitle:{
        type:String,
        required:true,
        maxlength:40
    },
    postDescription:{
        type:String,
        required: true,
    }
},
{
    timestamps:true
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;