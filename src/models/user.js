const mongoose  = require('mongoose')
const User = new mongoose.Schema({
    Name : {
        required : true,
        type : String
    },
    DOB : {
        // required : true ,
        type : Date
    },
    Age : {
        required : true,
        type : Number
    },
    Gmail :{
        required : true,
        type : String 
    }
})
const Users  = new mongoose.model("User",User)
module.exports= Users
