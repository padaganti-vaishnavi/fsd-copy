const express = require('express')
const contact = require('../models/Contact')

const router = new express.Router()

router.get('/', async (req, res) => { 
    try {
        const con = await contact.find();
        
        res.status(200).json(con);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})


router.post("/add", async (req, res) => {
    let name = req.body.name;
    let email= req.body.email;
    let phoneno= req.body.phoneno;
    let message= req.body.message;
    
    try {
        const newcont = new contact({name, email,phoneno,message})
        await newcont.save();

        res.status(201).json(newcont);
        console.log(newcont);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
)


module.exports  = router; 