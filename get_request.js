var http=require('http');
http.createServer(function(req,res) {
     res.writeHead(200,{'Content-Type':'Text/Plain'});
     res.end("Hello World\n");
}).listen(1337);
console.log("Server running at http://127.0.0.1");

