const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("In the middleWare...");
    next();
});

app.use((req,res,next) => {
    console.log("In the another middleWare...");
    // res.send('<h1> Hello from Express! </h1>');
    res.send({key1:10});

});

app.listen(3000);
 