//import mongoose

const mongoose = require('mongoose')
//schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true,
        min:[3,'Must be atleast 3 characters, but got {VALUE}']
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
    

})

//create modal
const users = mongoose.model("users",userSchema)

//export modal
module.exports = users