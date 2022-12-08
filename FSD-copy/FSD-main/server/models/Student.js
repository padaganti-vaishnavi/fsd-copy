const mongoose = require('mongoose')
const student = mongoose.schema({
    Name:{
        type : String,
        required:true
    },
    Rollno:{
        type:Number,
        required:true
    },
    PaymentStatus:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Student',student)