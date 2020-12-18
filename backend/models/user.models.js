const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{
        type: String,
        required: true,
        trim:true
    },
    lastname:{
        type: String,
        required: true,
        trim:true
    },
    emailid:{
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    username:{
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    confirmpassword: {
        type:String,
        required:true,
        trim:true,
    },
    dob:{
        type: Date,
        required:true,
    }

},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;