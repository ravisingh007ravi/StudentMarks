//<----------------------< Importing : Packages >---------------------->//
const mongoose = require('mongoose')

//<----------------------< Create : UserSchema >----------------------->//
const UserSchema = new mongoose.Schema({

    fname : { type : String, mandatory : true, trim : true },

    lname : { type : String, mandatory : true, trim : true},

    email : { type : String, mandatory : true, unique : true, trim : true},

    phone : { type : String, mandatory : true, unique : true, trim : true},

    password : { type : String, mandatory : true, trim : true},

    math : { type : Number, mandatory : true, trim : true},

    address : { type : String, mandatory : true, trim : true}
                  
    },

{timestamps : true})

//<----------------------< Exports : UserModel >----------------------->//
module.exports=mongoose.model('StdModel',UserSchema)