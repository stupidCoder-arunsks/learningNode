const path = require('path');
const rootDir = require('../util/path.js');

exports.getContactUs = (req,res,next) => {
    // res.send('<h1> Hello from Express! </h1>');
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
  
};