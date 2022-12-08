const express = require('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const url = 'mongodb://localhost:27017/'
mongoose.connect(url)
const port = 5000

const app = express()
app.use(cors())
app.use(express.json())

app.use('/Feedback', require('./routes/feedbackRoute'))
app.use('/Contact' , require('./routes/contactRoute'))
app.use('/Login', require('./routes/loginRoute'))
app.listen(port,()=>{
    console.log(`Server connected at ${port}`)
});
