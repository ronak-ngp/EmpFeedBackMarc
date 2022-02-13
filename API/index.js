const express = require("express");
var cors = require('cors');

const app = express();
const port = 5001;
app.use(cors());
app.use(express.json());
app.use('/api/employee',require('./routes/employee'));
app.use('/api/feedbacktype',require('./routes/feedbacktype'));

app.listen(port,() => {
    console.log(`Backend App Listening at http://localhost:${port}`);
});
