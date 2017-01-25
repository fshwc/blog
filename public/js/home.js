Vue.component('article-list',{
	template: '\
	<div class="article">\
		<p>{{article.name}}&nbsp;&nbsp;&nbsp;<span>{{getTime}}</span></p>\
		<h2 @click="goto(article.id)">{{article.title}}</h2>\
		<p>阅读&nbsp;{{article.readNumber}}</p>\
	</div>',
	props: ['article'],
	computed: {
		getTime: function() {
			var time = new Date(this.article.time);
			var year = time.getFullYear();
			var month = time.getMonth()+1;
			var day = time.getDate();
			month = (month.length < 2 ?  "0" + month : month);
			day = (day.length < 2 ?  "0" + day : day);
			return year+"-"+month+"-"+day;
		}
	},
	methods: {
		goto: function(id) {
			location.href='http://'+window.location.host+'/article?id='+id;
		}
	}
});

var app = new Vue({
	el: "#app",
	data: {
		articles:[]
	}
})

$(document).ready(function() {
	$.ajax({
		url: '/article/artList',
		data: null,
		type: 'get',
		success: function(data) {
			app.articles = data.article;
		}
	});
	$.ajax({
		url: "/user/session",
		type: 'get',
		data: null,
		success: function(data) {
			if(data.id && data.name) {
				$("#userPosition").html("<span>欢迎你<a id='un'>"+data.name+"</a></span> <a id='loginout'>退出</a>");
				//切个人文章页
				$("#un").click(function() {
					location.href='http://'+window.location.host+'/html/administration.html?id='+data.id;
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
})