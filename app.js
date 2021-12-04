var express = require('express');
var app = express();


app.set('vie engine','ejs');

app.get('/tecnologia', function(req, res){
	res.render("vie/secao/tecnologia");
});

app.get('/', function(req, res){
	res.send("<html><body>Portal de noticias</body></html>");
});


app.listen(3000,function(){
	console.log("servidor rodando com express");
});