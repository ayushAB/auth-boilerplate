const mongoose = require('mongoose');

const connectToDB = (mongoDBURL) => {

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) =>{
      console.log("Connected Successfully.")
  })
  .catch((err) => console.log(err));
}

module.exports = connectToDB;