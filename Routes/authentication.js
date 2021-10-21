const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
   return res.json({
       "data":"Welcome to Authentication"
   })
});


module.exports = router;