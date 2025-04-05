//import model

const users = require('../Modals/userSchema')


//import jwt

const jwt = require('jsonwebtoken')

//logic for signup

exports.signup = async(req, res)=>{

    console.log(`inside controller signup function`);

  
  const { name, username, password, gender, address } = req.body
   try { const existUser = await users.findOne({username})
      if(existUser){
        res.status(406).json('Account Already Exist...Please Login')
      }

   else{
        //create an object for the model
        const newUser = new users({
            name,
            username,
            password,
            gender,
            address
           
        })
        //save function in moongose - to permanently store this data in mongodb
         newUser.save()
              //response
        res.status(200).json(newUser)
   }}catch(err){
    res.status(401).json(`Signup request failed due to `,err)
    
   }
   
    }
    
//login 
exports.login = async(req, res)=>{

  console.log(`inside controller login function`);

const { username, password} = req.body
try{const existingUser = await users.findOne({username,password})
console.log(existingUser);

if(existingUser){

  const token = jwt.sign({userId:existingUser._id},"supersecretkey12345")

  res.status(200).json({
    existingUser,
    token
  })
}
else{
  res.status(406).json(`Incorrect username or password`)
}}catch(err){
  res.status(401).json(`failed to login due to ${err}`)
}


}

exports.updatepassword = async (req, res) => {
  const { username, password, newPassword } = req.body;
  

  try {
    const existingUser = await users.findOne({ username });

    if (existingUser) {
      if (existingUser.password === password) {
        const updateResult = await users.updateOne(
          { username },
          { $set: { password: newPassword } }
        );

        if (updateResult.modifiedCount > 0) {
          res.status(200).json('Password updated successfully!');
        } else {
          res.status(400).json('No changes made to the password.');
        }
      } else {
        res.status(401).json('Incorrect current password.');
      }
    } else {
      res.status(404).json('User not found.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while updating the password.', error: err });
  }
};

