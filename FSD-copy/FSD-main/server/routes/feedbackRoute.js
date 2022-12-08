const express = require('express')
const Feedback = require('../models/Feedback')

const router = new express.Router()

router.get('/', async (req, res) => { 
    try {
        const feed = await Feedback.find();
                
        res.status(200).json(feed);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})


router.post("/add", async (req, res) => {
    const { Rollno, feedback } = req.body;
    try {
        const newfeed = new Feedback({Rollno , feedback});
        await newfeed.save();

        res.status(201).json(newfeed );
        console.log(newfeed);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
)


module.exports  = router