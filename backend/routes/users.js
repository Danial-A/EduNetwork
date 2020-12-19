const router = require('express').Router();
const User = require('../models/user.models');
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

router.route('/sign-in').post(async(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    User.findOne({username, password}, (err,user)=>{
       if(err){
           console.log(err)
       }
       if(!user){
           return res.send('User name or password incorrect')
       }
       return res.status(200).send("User Signed In")
   })
});
module.exports = router;

