const fs = require('fs');
var data = [];
var count = 0;



const requestHandler = (req,res) => {

    const reqUrl = req.url;
    const method = req.method;
  
    if (reqUrl === '/') {
      console.log('count >>>> ' , count++);
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Hello...</title></head>');
      res.write('<body>');
      for(let i=0;i<data.length;i++){
        res.write(`<h1>${data[i]}</h1>`);
      }
      res.write('<form action="/message" method="POST"><input type ="text" name="message"><button type="submit">Send</form>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    }
  
    if (reqUrl === '/message' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
        console.log('chunk >>>>>>', chunk);
      });
  
      return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log('ParsedBody >>>>>', parsedBody);
        const message = parsedBody.split('=')[1];
        console.log('message >>>> ', message);
        data.push(message);
        console.log('data length >>>> ' , data.length);
        fs.writeFile('Hello.txt', message + "\r\n", err => {
          // fs.readFile('Hello.txt', 'utf-8', function (err, data) {
          //   if (err) throw err;
          //   readData = data;
          //   console.log('read file >>>>> ', data);
          // });
          res.setHeader('Location', '/');
          res.statusCode = 302;
          return res.end();
        });
  
      });
  
    }
  
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello from node js server...</title></head>');
    res.write('<body><h1>Welcome to my webPage</h1></body>');
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler;

module.exports = {
    handler: requestHandler,
    someText: 'some hard coded text'
};

// exports.handler = requestHandler;