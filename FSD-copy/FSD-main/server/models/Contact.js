const mongoose = require('mongoose')
const contact = mongoose.Schema({
    name :{
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    message :{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('contact', contact)