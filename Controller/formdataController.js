
//import formdata model

const dataform = require('../Modals/formdataSchema')

exports.submitdata =async(req,res)=>{
    console.log('inside the formdata controller');

    const userId = req.payload
    console.log(userId);
    
    const IdImage = req.file.filename
    console.log(IdImage);
    

    const { email,DOB, age, department, Bloodgroup, comment} = req.body
    console.log(`${email},${DOB}, ${age}, ${department}, ${Bloodgroup}, ${IdImage},${comment},${userId}`);

    try {
        
        const existingdata = await dataform.findOne({email})
    if(existingdata){
        res.status(406).json(`Form already exist for the respective user`)
    }
    else{
        const newformdata = new dataform({email,DOB,age,department,Bloodgroup,IdImage,comment,userId
        })
        await newformdata.save()
        res.status(200).json(newformdata)
    }

    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }
    

      
}

