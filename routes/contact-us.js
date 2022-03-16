
  
const express = require('express');
const contactusContoller = require('../controller/contactUs.js');

const router = express.Router();

router.get('/',contactusContoller.getContactUs);

// router.get('/',(req,res,next) => {
//     // res.send('<h1> Hello from Express! </h1>');
//     res.sendFile(path.join(rootDir,'views','contact-us.html'));
  
// });

module.exports = router;