var express = require('express');
var session = require('cookie-session');
var user = require('./controll/user');
var article = require('./controll/article');
var shopping = require('./controll/shopping');
var productdetails = require('./controll/productdetails');

var app = new express();

app.use(express.static('public'));
app.use(session({
	secret: 'Tsundere'
}))
app.use('/user',user);
app.use('/article',article);
app.use('/good',shopping);
app.use('/',productdetails);


var server = app.listen(3000,function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('example app listening at http://%s:%s',host,port);
})