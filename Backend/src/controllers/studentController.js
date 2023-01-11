const stdModel = require('../models/studentsModel.js');

const createStd = async(req,res) => {
    try{
        const body = req.body;
        const data = await stdModel.create(body);
        res.status(201).send({status:true,data:data})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

module.exports ={createStd}