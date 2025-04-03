//import mongoose

const mongoose = require('mongoose')

//formdata schema

const formdataSchema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    DOB:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    department:{type:String,
        require:true
    },
    Bloodgroup:{
        type:String,
        require:true
    },
    IdImage :{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

//create modal

const Formdatas = mongoose.model("Formdatas",formdataSchema)

//export model
module.exports = Formdatas