var fs=require('fs');
var http=require('http');
http.createServer(function(req,res){
      res.writeHead('Status 200 ok');
   //   res.send('Ready to accept the file');
//    req.pipe(res); //The below lines can be replaced by this single line
     req.on('data',function(chunk){
         console.log(chunk.toString());
         res.write(chunk);
      });
     req.on('end',function(){
         res.end();
      });
}).listen(1337);
      
