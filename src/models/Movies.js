const mongoose = require('mongoose')
const movie = new mongoose.Schema({
    Title :{
        required : true,
        type: String,
    },
    Duration : {
        type : Number,
        required : true
    },
    Description : {
        required : true,
        type : String
    },
    Rating : {
        required : true,
        type : Number
    }
 })
 const Movies = new mongoose.model("movie",movie)
 module.exports = Movies