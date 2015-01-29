var http=require('http')
var createmyserver=function(port){
           http.createServer(function(req,res){
              res.writeHead(200);
              res.write("Hi Its my function");
              res.send('Finished');
           }).listen(port);
   };

exports=createmyserver;
