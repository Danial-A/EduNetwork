const router = require('express').Router();
let User = require('../models/user.models');
const bcrypt = require('bcryptjs')

router.route('/sign-up').post((req,res) => {
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
       password: passwordHash(),
       confirmpassword,
       dob
    
   }); 
   newUser.save()
   .then(()=> res.json('User Added to database!'))
   .catch(error =>{res.status(400).json('Error: '+error)});
});

module.exports = router;

