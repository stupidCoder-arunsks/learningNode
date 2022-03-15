const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/login', (req, res, next) => {
    res.send('<form onsubmit=localStorage.setItem(`username`,document.getElementById(`username`).value) action="/" method="GET"><input id="username" type="text" name="title"><button type="submit">Add</button></form>');
});


app.get('/', (req, res, next) => {
    res.send('<form onsubmit = "document.getElementById(`username`).value = localStorage.getItem(`username`)" action="/" method="POST"><input id="message" type="text" name="message" ><input id="username" type="hidden"  name="username" ><button type="submit">Send message</button></form>');
});

app.post('/', (req, res, next) => {
    console.log("req body : >>>>> " , req.body);

});

app.listen(3000);