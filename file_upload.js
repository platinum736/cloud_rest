var http=require('http')
var fs=require('fs')

http.createServer(function(req,res){
           var writeStream=fs.createWriteStream('uploaded_file');
           var size=req.headers['content-length'];
           var uploaded=0;
           req.pipe(writeStream);
           req.on('data',function(chunk){
              uploaded=uploaded+chunk.length;
           var progress=(uploaded/size)*100;
              res.write('Progress:'+parseInt(progress,10)+"%\n");
           });
           req.on('end',function(){
              res.end('File Upload Successfull');
           });
           
}).listen(1337);
