var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var select = require('./mysql');

var app = new express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req, res) {
	select('SELECT * FROM goods').then(function(data) {
		res.json({data: data});
		res.end();
	}).catch(function(){})
});

//跳转到个人购物车
app.get("/personalCart",function(req, res){
	res.sendFile('/public/html/shopAdministration.html',{root:__dirname+"/../"},function(err) {
        if(err) {
            console.log(err);
        }else {
            console.log("yes");
        }
    });
});

app.post('/changeCount',function(req, res) {
	select('UPDATE buygood SET number = '+req.body.number+' WHERE buyid = ' + req.session.userid + ' AND id = '+req.body.id+';').then(function(data) {
		if(data.results.affectedRows > 0) {
			res.json({status:99999});
			res.end();
		}else {
			res.json({status:00000});
			res.end();
		}
	})
});

//个人商品++
app.post('/plus',function(req, res) {
	var id = req.body.id;
	select('UPDATE buygood SET number = (number+1) WHERE buyid = ' + req.session.userid + ' AND id = '+id+';').then(function(data) {
		console.log(data);
		if(data.results.affectedRows > 0) {
			res.json({status:99999});
			res.end();
		}else {
			res.json({status:00000});
			res.end();
		}
	})
});

//个人商品--
app.post('/minus',function(req, res) {
	var id = req.body.id;
	select('UPDATE buygood SET number = (number-1) WHERE buyid = ' + req.session.userid + ' AND id = '+id+';').then(function(data) {
		console.log(data);
		if(data.results.affectedRows > 0) {
			res.json({status:99999});
			res.end();
		}else {
			res.json({status:00000});
			res.end();
		}
	})
});

//添加商品
app.post('/addGood',function(req, res) {
	var id = req.body.id;
	select('INSERT INTO buygood(buyid,goodid,number) VALUES('+ req.session.userid +','+id+',1)').then(function(data) {
		if(data.results.affectedRows>0) {
			res.json({status:99999});
			res.end();
		}
	})
});

//删除商品
app.post("/removeGood",function(req, res) {
	select("DELETE FROM buygood WHERE buyid = "+ req.session.userid +" AND goodid = " + req.body.id + ";").then(function(data) {
		if(data.results.affectedRows>0) {
			res.json({status:99999});
			res.end();
		}
	})
});

//查询已购买商品
app.post("/hasgood",function(req, res){
	select("SELECT goodid FROM buygood WHERE buyid = " + req.session.userid + ";").then(function(data) {
		res.json({data: data.results});
		res.end();
	})
});

//查询当前登录者的全部商品
app.get('/getPersonGoods',function(req, res) {
	if(req.session.userid) {
		select("SELECT buygood.id,name,price,number,goodid FROM buygood,goods WHERE buyid = " + req.session.userid + " AND buygood.goodid = goods.id;").then(function(data) {
			res.json({good:data.results});
			res.end();
		})
	}else {
		res.json({status:00000});
		res.end();
	}
	
})

module.exports = app;