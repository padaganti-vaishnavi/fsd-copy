const mongoose = require('mongoose')
const feedback = mongoose.Schema({
    Rollno:{
        type:Number,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
},
{
    collection: 'feedback-data'
}
)
const model =mongoose.model('feedback',feedback)

module.exports = model;