var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var select = require('./mysql');

var app = new express();
app.use(bodyParser.urlencoded({ extended: true }));

//http://localhost:3000/article?id=1   发送文章静态页
app.get('/',function(req, res) {
    res.sendFile('/public/html/article.html',{root:__dirname+"/../"},function(err) {
        if(err) {
            console.log(err);
        }else {
            console.log("yes");
        }
    });
});

//全部文章
app.get("/artList",function(req, res){
	select("SELECT id,title,readNumber,time,commentNumber,name FROM _user,article WHERE _user.Uid = article.author;").then(function(data) {
		res.json({article:data.results});
		res.end();
	})
});


//添加文章静态页
app.get('/addArticle',function(req, res) {
    res.sendFile('/public/html/addArticle.html',{root:__dirname+"/../"},function(err) {
        if(err) {
            console.log(err);
        }else {
            console.log("yes");
        }
    });
});

//文章内容
app.get('/getArticleId',function(req, res) {
	if(req.query.id) {
		select("SELECT * FROM article WHERE id="+req.query.id+";").then(function(data) {
			res.json({article:data.results});
			res.end();
		})
	}else {
		res.json({noArticle: true});
		res.end();
	}
});

//初始化个人主页
app.get('/persionBlog',function(req, res) {
    res.sendFile('/public/html/persionBlog.html',{root:__dirname+"/../"},function(err) {
        if(err) {
            console.log(err);
        }else {
            console.log("yes");
        }
    });
});

//获取个人文章
app.get('/personBlog', function(req, res) {
	var id = req.query.id;
	select('SELECT id,title,time,type,description  FROM article,_user WHERE _user.Uid = article.author AND Uid = ' + id).then(function(data) {
		res.json({article:data.results});
		res.end();
	}).catch(function(){})
})

//初始化获取文章内容和评论
app.get('/getArtMes',function(req, res) {
	var aId = req.query.id,
		ip = spliceIp(req.ip),
		artMes = null,
		comMes = null;

	//获取文章内容
	select("SELECT * FROM article WHERE id="+aId+";").then(function(data) {
		artMes = data;
		if(comMes) {
			res.json({article:artMes,comment: comMes});
			res.end();
		}	
	}).catch(function() {})
	//获取评论
	select("SELECT * FROM _user,articlecomment WHERE _user.Uid = articlecomment.comerid and Articleid="+aId+";").then(function(data) {
		var comList = [];
		var comment = data.results;
		var index = 0;
		for(var i = 0; i< comment.length; i++) {
			if(comment[i].parentId == null) {
				var c = {};
				c.name = comment[i].name;       //评论人的名字
				c.comerid = comment[i].comerid; //评论人的id
				c.content = comment[i].content;
				c.time = comment[i].time;
				c.commentId = comment[i].commentId;
				c.reply = [];
				c.parentId = null;
				comList.push(c);
				comment[i].index = index++;
			}else {
				var c = {};
				c.comerid = comment[i].comerid;
				c.responder = comment[i].name;
				c.content = comment[i].content;
				c.commentId = comment[i].commentId;
				c.time = comment[i].time;
				c.parentId = comment[i].parentId;
				for(var j = 0; j < comList.length; j++) {
					if(comment[j].commentId == c.parentId) {
						c.reviewers = comment[j].name;
						if(comment[j].parentId == null ) {
							comList[j].reply.push(c);
						}else {
							for(var q = 0; q <= j; q++) {
								if(comList[q].commentId = comment[j].parentId) {
									comList[q].reply.push(c);
								}
							}
						}
						break;
					}
				}
			}
		}
		comMes = comList;
		if(artMes) {
			res.json({article:artMes,comment: comMes});
			res.end();
		}
	}).catch(function() {});

	//检查此ip是否查看过此文章
	select("SELECT * FROM ipStatistics WHERE ip = '" + ip +"' AND AIpid = " + aId).then(function(data) {
		if(data.status == 0) {
			select("INSERT INTO ipStatistics (ip, AIpid) VALUES('" + ip + "',"+ aId + ");").then(function(data) {
				if(data.results.affectedRows) {
					select("UPDATE article SET readNumber=readNumber+1 WHERE id = "+ aId +";").then(function(){}).catch(function() {})
				}
			})
		}
	}).catch(function(err){})
});

//保存评论
app.post("/saveComment",function(req, res) {
	var Articleid = req.body.Articleid,
		comerid = req.session.userid,
		content = req.body.content,
		time = new Date().getTime(),
		parentId = req.body.parentId || null;
	select("INSERT INTO articlecomment (Articleid, comerid, content, parentId, time) VALUES("+Articleid+","+comerid+",'"+content+"',"+parentId+","+time+");").then(function(data) {
		if(data.results.affectedRows > 0) {
			res.json({status:99999});
			res.end();
		}else {
			res.json({status:00000});
			res.end();
		}
	}).catch(function() {})
})

//添加新文章
app.post("/saveArticle", function(req, res) {
	var id = req.body.id,
		title = req.body.title,
		content = req.body.content,
		time = new Date().getTime(),
		//author = req.body.author;
		author = req.session.userid;
	if(id) {
		select("UPDATE article SET title='"+title+"',content='"+content+"', time="+time+" WHERE id="+id+";").then(function(data) {
			console.log(data);
			if(data.results.affectedRows > 0) {
				res.json({insertId: data.results.insertId,status: 99999});
				res.end();
			}
		}).catch(function() {})
	}else {
		select('INSERT into article (title, content, time, author) VALUES("'+title+'","'+content+'",'+time+',"'+author+'");').then(function(data){
			console.log(data);
			if(data.results.affectedRows > 0) {
				res.json({insertId: data.results.insertId,status: 99999});
				res.end();
			}
		}).catch(function() {})
	}
})

//博文管理
app.get('/allArticle', function(req, res) {
	var a = req.query.id;
	res.sendFile('/public/html/administration.html?id='+a,{root:__dirname+"/../"},function(err) {
        if(err) {
            console.log(err);
        }else {
            console.log("yes");
        }
    });
})

//删除文章
app.delete("/removeArticle",function(req, res) {
	select("DELETE FROM article WHERE id = " + req.body.id).then(function(data) {
		if(data.results.affectedRows) {
			res.json({status:99999});
			res.end();
		}
	}).catch(function() {})
})


//截取ip
function spliceIp(ip ) {
	return ip.substring(ip.lastIndexOf(":")+1);
}

module.exports = app;