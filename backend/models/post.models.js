const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type:String,
        required:true,
        maxlength:255
    },
    body:{
        type:String,
        required: true,
    },
    username:{
        type:String,
        required:true
    },
    likes:[
        {username:{
            type:String,
            required:true,
            trim:true
        }
    }
    ],
    comments: [
        {
            username:{
                type:String,
                required: true,
                trim: true
            },
            comment: {
                type: String,
                required: true
            }
        },
        {
            timestamps: true
        }
    ]

},
{
    timestamps:true
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;