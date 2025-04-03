//import mongoose
const mongoose = require('mongoose')

//get connection string

const connectionString = process.env.DATABASE


mongoose.connect(connectionString).then(()=>{
    console.log(`mongodb connected successfully`);
}).catch((err)=>{
    console.log(`mongodb failed to connect due to :${err}`);
    
})
