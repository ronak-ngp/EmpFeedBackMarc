const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/fetchfeedbacktype', (req,res)=>{
    try {
        fs.readFile("FeedbackType.json", async (err, data) => {
            if (err) throw err;
            const feedbacktypes =await JSON.parse(data);
            res.send(feedbacktypes);
        });
        
    
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error"); 
    }
    
});

module.exports = router;