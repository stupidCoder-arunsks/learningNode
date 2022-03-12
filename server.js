const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.url,req.method,req.headers);
  const reqUrl = req.url;
// console.log('request Url >>>>>>> ' ,reqUrl === '/test' ? true : false);   
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello from node js server...</title></head>');
    if(req.url == '/home')
    res.write('<body><h1>Welcome to my home</h1></body>');
    if(req.url == '/about')
    res.write('<body><h1>Welcome to about page</h1></body>');
    if(req.url == '/node')
    res.write('<body><h1>Welcome to my node Js project</h1></body>');
    res.write('</html>');

});

server.listen(3000);