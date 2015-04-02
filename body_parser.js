var express=require('express');
var bodyParser=require('body-parser');
app=express();
app.use(bodyParser());
var Body={};
var Body1={};

app.get('/',function(req,res){
    var body=req.body;
    console.log(body);
    res.send(Body);
});

app.post('/',function(req,res){
    Body=req.body;
    Body1.recom1="Grapes";
    Body1.recom2="Guava";
    Body1.recom3="watermelon";
    console.log(req.body.name);
    console.log(Body);
    res.send(Body1);
});

app.put('/:id/:id1',function(req,res){
    var id=req.params.id;
    var id1=req.params.id1;
    Body.id=id1;
    res.send(Body);
})

app.listen(1337);
