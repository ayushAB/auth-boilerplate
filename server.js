require('dotenv').config()
const express = require('express');
const dbConnect = require('./Configurations/database_configuration');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 4000
app.use(cors({optionsSuccessStatus: 200})); 

//Database connection
const connectionURL = process.env.DB_URL || 'mongodb://localhost:27017/myapp'
dbConnect(connectionURL)

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/api/v1',require('./Routes/authentication'));

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
})