const express = require('express');
const router = express.Router();
const fs = require("fs");
router.post('/addEmployeeFeedBack',async (req,res)=>{
    try {
       const feedBackparse = JSON.parse(JSON.stringify(req.body));
       const feedBackstring = JSON.stringify(feedBackparse);
       fs.writeFile(`db_${feedBackparse[0].id}.json`, feedBackstring, 'utf8', function (err) {
        if (err) {
            
            return console.log(err);
        }
    
        res.status(200).json(feedBackstring);
    });
       
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error"); 
    }
});

router.get('/fetchfeedback/:id', (req,res)=>{
    try {
       
        fs.readFile(`db_${req.params.id}.json`,  (err, data) => {
            // Check for errors
            if (err) throw err;
            // Converting to JSON
            const fetch =JSON.parse(data);
            res.send(fetch);
        });
        
    
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error"); 
    }
    
});

module.exports = router;