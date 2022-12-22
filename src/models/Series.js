const mongoose = require ('mongoose')
const series = new  mongoose.Schema({
    Title : {
        required : true,
        type : String
    },
    Description : {
        required : true,
        type : String
    },
    Episodes : {
        required :  true ,
        type : Number
    },
    Release : {
        type : Date 
    }
})
const Series = new mongoose.model("serie",series);
module.exports = Series