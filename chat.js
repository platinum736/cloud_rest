var net=require('net');
var sockets=[];
var server=net.createServer(function(socket){
        sockets.push(socket);
       //console.log("Client Connected");
      // socket.on('end',function(){
      //      console.log("Client Disconnected");
      //      socket.write("Bye");
      // });
       socket.on('data',function(data){
          for(var i=0;i<sockets.length;i++){
           if(sockets[i]!=socket)
             sockets[i].write(data);
             }
//          socket.write("You said:"+data);
            
       });
      socket.on('end',function(){
           var index=sockets.indexOf(socket);
           sockets.splice(index,1);
      });
       socket.on('close',function(){
           socket.end("BYE BYE!!!Welcome Again!!");
           sockets.splice(sockets.indexOf(socket),1);
     });
     socket.on('connect',function(){
           socket.write("Hello Welcome");
//           socket.pipe(socket);
      });
});
server.listen(1337,function(){
    console.log("Server started at port 1337");
});

