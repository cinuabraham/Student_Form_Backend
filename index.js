require('dotenv').config() //import dotenv

const express = require('express') //import express

const cors = require('cors')  //import cors


//import router
const router = require('./Routing/router')

//import connection.js //here we don't have to save in a diff variable. because we only use DB once
require('./DB/connection')

const formserver = express() //create server

formserver.use(cors())  //use of cors by server

formserver.use(express.json()) //json-javascript object

//server using router
formserver.use(router)

const PORT = 4000 || process.env   //customize port

formserver.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
    
})

formserver.get('/',(req, res)=>{
    res.send(`<h1 style="color:green">form server running successfully</h1>`)
})

//post request
formserver.post('/',(req,res)=>{
    res.send(`post request`)
})
