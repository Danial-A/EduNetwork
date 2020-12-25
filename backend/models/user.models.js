const bcrypt = require('bcryptjs')
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


// userSchema.pre('save', async function (next){
//     try{
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(this.password, salt)
//         this.password = hashedPassword;
//         this.confirmpassword = hashedPassword;
//         console.log(this.password)
//         next();
//     }catch(error){
//         next(error)
//     }
// })

// userSchema.methods.validPassword =async function(password){
//     try{
//         return await bcrypt.compare(password, this.password)
//     }catch(error){
//         throw error
//     }
// }

const User = mongoose.model('User', userSchema);

module.exports = User;