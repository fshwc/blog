var userid = null,        //当前登录人的id
	loginName = null;     //当前登录人的name

Vue.component('article-content',{
	template:'\
	<div>\
		<div class="titleBox">\
			<h1>{{article.title}}</h1>\
			<p><i class="glyphicon glyphicon-time"></i><span>{{articleTime}}</span><i class="glyphicon glyphicon-eye-open"></i><span>阅读量：{{article.readNumber}}</span><a @click="edit" class="articleAdit" v-show="samePerson">编辑</a></p>\
		</div>\
		<div class="articleText" v-html="article.content"></div>\
	</div>', 
	props: ['article'],
	computed: {
		articleTime: function() {
			return getTime(this.article.time)
		},
		samePerson: function() {
			return userid == app.article.author;
		}
	},
	methods: {
		edit: function() {
			location.href='http://'+window.location.host+'/html/addArticle.html?id='+getArticleId();
		}
	}
});

Vue.component('commemt-content',{
	template:'\
	<div class="commentBox">\
		<h3>评论</h3>\
		<p v-if="comment.length==0">暂无评论，我来发表第一篇评论！</p>\
		<div v-else>\
			<div class="comment" v-for="(item,index) in comment" v-bind:index="index" >\
				<b>{{item.name}}<span>{{formatTime(item.time)}}</span></b>\
				<p @click="changeCommenter(item.name,item.commentId,index)">{{item.content}}</p>\
				<div v-if="item.reply.length > 0">\
					<div class="reply" v-for="reply in item.reply">\
						<b>{{reply.responder}}&nbsp;&nbsp;回复&nbsp;&nbsp;{{reply.reviewers}}<span>{{formatTime(reply.time)}}</span></b>\
						<p @click="changeCommenter(reply.responder,reply.commentId,index)">{{reply.content}}</p>\
					</div>\
				</div>\
			</div>\
		</div>\
	</div>',
	props: ['comment'],
	methods: {
		changeCommenter: function(name,comerid,index) {
			console.log(comerid);
			this.$emit("change",name,comerid,index);
		},
		formatTime: function(data) {
			return getTime(data);
		}
	}
});

Vue.component('commentTextarea',{
	template:'\
	<div class="commentBox">\
		<h3>发表评论</h3>\
		<b v-if="type">你回复&nbsp;{{name}}</b>\
		<textarea name="" value="请填写评论内容" v-model="commentText"></textarea>\
		<button class="btn" @click="addComment">发表</button>\
		<button class="btn" @click="canelComment">取消</button>\
	</div>',
	props: ['type','name'],
	data: function(){
		return {commentText:""}
	},   
	methods: {
		addComment: function() {
			this.$emit("submit",this.commentText);
			this.commentText = "";
		},
		canelComment: function() {
			this.$emit("canel");
			this.commentText = "";
		}
	}
});

var app = new Vue({
	el: "#comment",
	data: {
		noArticle: true,        //没有文章内容
		commenter: "session",   //评论人
		type: 0,                //0为评论作者1为评论别人的评论2为评论别人的别人
		oldComment: null,
		oldId: null,
		chosedIndex: -1,        //被选中的评论的index
		article: {},
		comment: []
	},
	methods: {
		addComment: function(com) {
			//检查登录没
			if(userid && loginName) {
				var parentId = this.type == 1 ? this.oldId : null;			
				$.ajax({
						url: '/article/saveComment',
						type: 'post',
						data: {
							Articleid: getArticleId(),
							content: com,
							parentId: parentId
						},
						success: function(data) {
							if(data.status == 99999 && app.type == 0) {
								app.comment.push({
									name: loginName,
									content: com,
									time: getTime(new Date().getTime()),
									reply: []
								});
							}else {
								app.comment[app.chosedIndex].reply.push({
									responder: loginName,
									reviewers: app.oldComment,
									time: getTime(new Date().getTime()),
									content: com
								});
								app.type = 0;
							}
						}
					})
			}else {
				alert("你还没登录，请先登录");
				location.href='http://'+window.location.host+'/html/signin.html';
			}
		},
		changCommmer: function(name,id,index) {
			this.oldComment = name;
			this.oldId = id;
			this.chosedIndex = index;
			this.type = 1;
		},
		canelCommit: function() {
			this.type = 0;
		}
	}
})

//格式化时间
function getTime(date) {
	var time = new Date(date);
	var year = time.getFullYear();
	var month = time.getMonth()+1;
	var day = time.getDate();
	month = (month.length < 2 ?  "0" + month : month);
	day = (day.length < 2 ?  "0" + day : day);
	return year+"-"+month+"-"+day;
}

function init() {
	$.ajax({
		url: '/article/getArtMes',
		type: 'get',
		data: {
			id: getArticleId()
		},
		success: function(data) {
			if(data.article.results.length !== 0) {
				app.noArticle = false;
				app.article = data.article.results[0];
				app.comment = data.comment;
				console.log(data.comment);
			}else {
				app.noArticle = true;
			}
		}
	});
	$.ajax({
		url: "/user/session",
		type: 'get',
		data: null,
		success: function(data) {
			userid = data.id;
			loginName = data.name;
			if(userid && loginName) {
				$("#userPosition").html("<span>欢迎你<a id='un'>"+loginName+"</a></span> <a id='loginout'>退出</a>");
				//切个人文章页
				$("#un").click(function() {
					location.href='http://'+window.location.host+'/html/administration.html?id='+userid;
				})
				//退出登录
				$("#loginout").on("click",function() {
					alert(1)
					$.ajax({
						url: "/user/logout",
						type: 'get',
						data: null,
						success: function(data) {
							location.href='http://'+window.location.host+'/html/signin.html';
						}
					})	
				})
			}else {
				$("#userPosition").html("<a href='http://"+window.location.host+"/html/signin.html'>请登录</a>");
			}
		}
	});		
}


function getArticleId (){
	var params = window.location.search.substring(1).split('&');
	var size = params.length;
	var param = null;
	for(var i = 0; i < size; i++){
		param = params[i].split('=');
		if(param[0] == "id"){
			return param[1];
		}
	}		
}

$(document).ready(function() {
	init();
});