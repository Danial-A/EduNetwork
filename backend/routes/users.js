const router = require('express').Router();
let User = require('../models/user.models');
const bcrypt = require('bcryptjs')
const {signAccessToken} = require('../helpers/jwtHelper')


router.route('/sign-up').post(async(req,res) => {
    console.log(req)
   const firstname = req.body.firstname;
   const lastname = req.body.lastname;
   const emailid = req.body.emailid;
   const username = req.body.username;
   const password = req.body.password;
   const confirmpassword = req.body.confirmpassword;
   const dob = Date.parse(req.body.dob);
   const newUser = new User({
       firstname,
       lastname,
       emailid,
       username,
       password,
       confirmpassword,
       dob
    
   }); 
   newUser.save()
   .then(()=> res.json('User Added to database!'))
   .catch(error =>{res.status(400).json('Error: '+error)});

   const accessToken = await signAccessToken(newUser._id)
   res.send({accessToken})
});

router.route('/sign-in', (req,res,next)=>{
    try{
        const user = User.findOne({username })
        if(!user){
            console.log("No user in the database");
        }

    }catch(error){
        next(error)
    }
})

module.exports = router;

