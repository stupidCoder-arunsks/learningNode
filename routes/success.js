const express = require('express');
const path = require('path');

const rootDir = require('../util/path.js');

const router = express.Router();

router.use('/',(req,res,next) => {
    // res.send('<h1> Hello from Express! </h1>');
    res.sendFile(path.join(rootDir,'views','success.html'));
});

module.exports = router;