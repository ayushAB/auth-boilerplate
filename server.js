require('dotenv').config()
const express = require('express');
const dbConnect = require('./Configurations/database_configuration');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
require('./Models/user')
require('./Configurations/passport_configuration');

const port = process.env.PORT || 4000
app.use(cors({optionsSuccessStatus: 200})); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
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