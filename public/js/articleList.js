Vue.component('article-list',{
	template:'\
	<table class="table table-hover table-bordered">\
		<tr>\
			<th>#</th><th>文章标题</th><th>时间</th><th>浏览人数</th><th></th>\
		</tr>\
		<tr v-for="(item,index) in article">\
			<td>{{index}}</td>\
			<td>{{item.title}}</td>\
			<td>{{item.time}}</td>\
			<td>{{item.readNumber}}</td>\
			<td><button class="btn btn-success" @click="remove(item.id)">删除</button><button class="btn btn-danger" @click="update(item.id)">修改</button></td>\
		</tr>\
	</table>',
	props: ['article'],
	methods: {
		remove: function(id) {
			this.$emit("remove",id);
		},
		update: function(id) {

		}
	}
});

var app = new Vue({
	el: '#art',
	data: {
		article: [],
		items: [
			{title:123},
			{title:123},
			{title:123}
		]
	},
	methods: {
		removeArticle: function(id) {
			alert(id);
		}
	}
})

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
	$.ajax({
		url: '/article/personBlog',
		type: 'get',
		data: {
			id: getArticleId()
		},
		success: function(data) {
			console.log(data);
			if(data == "noMatch") {
				alert("你未登录，请先登录!");
				//location.href='http://'+window.location.host+'/html/signin.html';
			}else {
				$("#art").html(getList(data.article));
			}
		}
	})
})

function getList(data) {
	var str = "<table class='table table-hover table-bordered'><tr><th>#</th><th>文章标题</th><th>时间</th><th>浏览人数</th><th></th></tr>";
	for(var i = 0; i < data.length; i++) {
		str += "<tr><td>"+(i+1)+"</td><td>"+data[i].title+"</td><td>"+data[i].time+"</td><td>"+data[i].readNumber+"</td><td><button class='btn btn-success' onClick='remove("+i+","+data[i].id+")'>删除</button><button class='btn btn-danger' onClick='updata("+data[i].id+")'>修改</button></td></tr>";
	}
	return str+"</table>";
}

function remove(i,id) {
	$.ajax({
		url: '/article/removeArticle',
		data: {
			id: id
		},
		type: 'delete',
		success: function(data) {
			if(data.status == 99999) {
				alert("删除成功");
				$("#art table tr").eq(i+1).css("display","none");
			}
		}
	})
}

function updata(id) {
	location.href='http://'+window.location.host+'/html/addArticle.html?id='+id;
}