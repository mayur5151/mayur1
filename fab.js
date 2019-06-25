var express=require('express');
var app=express();

var fabrikam=function(req,res)
{
	console.log("invoking rest api");
	var product=[{id:1,name:"abc"} ,{id:2,name:"xyz"}];
	res.send(product)
};
app.get('/product',fabrikam);
var server=app.listen(3000,function(){

var host=server.address().address
var port=server.address().port
console.log("Example app listening at 3000 port",host,port)
})