const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require('path');
router.post('/addEmployeeFeedBack',async (req,res)=>{
    try {
       const id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
       const feedBackparse = JSON.parse(JSON.stringify(req.body));
       const feedBackstring = JSON.stringify(feedBackparse);
       fs.writeFile(`db/db_${id}.json`, feedBackstring, 'utf8', function (err) {
       res.status(200).json(feedBackstring);
    });
       
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error"); 
    }
});


router.get('/fetchfeedback',async (req,res)=>{
    try {
      
         // dir path that contains all your json file
        const dirPath = './db';
        
        const files = fs.readdirSync(dirPath);
        const feedBs = []
        files.map((val, i) => {
            
            const file = fs.readFileSync(path.join(dirPath, val), 'utf8');

            const feedb = JSON.parse(file);

            feedBs.push(feedb.FeedBacks);
          });
            
            
        let finalFeedBack = [];
      
        feedBs.map((feedb) => { 
         (feedb).map((feedbacks) => { 
          
               let dupFeedBack = finalFeedBack.find(fb => {
                
                 return fb.feedback === feedbacks.FeedBack
               });

              

               if(dupFeedBack)
               {
                 if(feedbacks.green) dupFeedBack.green = dupFeedBack.green + 1;
                 if(feedbacks.orange) dupFeedBack.orange = dupFeedBack.orange + 1;
                 if(feedbacks.red) dupFeedBack.red = dupFeedBack.red + 1;
                 
                 if(feedbacks.comment !== "")
                 { 
                   dupFeedBack.Comment = dupFeedBack.Comment != "" ? 
                   dupFeedBack.Comment + " \n " + feedbacks.comment : feedbacks.comment
                 }
                 return; 
               }

                let [green,orange,red] = [0,0,0]
                 if(feedbacks.green) green = 1;
                 if(feedbacks.orange) orange = 1;
                 if(feedbacks.red) red =  1;

               finalFeedBack.push({feedback:feedbacks.FeedBack,green:green,orange:orange,red:red,Comment:feedbacks.comment});
          })
         });

        let response = JSON.parse(JSON.stringify(finalFeedBack)); 
        res.json(response);
    
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error"); 
    }
    
});




module.exports = router;