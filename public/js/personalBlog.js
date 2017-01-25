var articleList = {
	template: '<a @click="goto(item.id)"><div class="col-md-1">【{{isMy}}】</div><div class="col-md-9">{{item.title}}</div><div class="col-md-2">{{getTime(item.time)}}</div><div class="clearfix"></div></a>',
	props: ['item'],
	computed: {
		isMy: function() {
			return this.item.type == 0 ? '原' : '转'
 		}
	},
	methods: {
		goto: function(id) {
			this.$emit("details",id);
		}
	}
};
var articleBox = {
	template: '<div class="articles" @click="goto(item.id)"><div class="row"><div class="col-md-3 cover"><img src="/images/zcover.jpg" /></div><div class="col-md-9"><h4><span :class="isMyClass">【{{isMy}}】</span>{{item.title}}</h4><p>{{item.description}}</p><div class="time">{{getTime(item.time)}}</div></div></div></div>',
	props: ['item'], 
	computed: {
		isMyClass: function() {
			return this.item.type == 0 ? "original" : "reprint";
		},
		isMy: function() {
			return this.item.type == 0 ? '原' : '转'
 		}
	},
	methods: {
		goto: function(id) {
			this.$emit("details",id);
		}
	}
};
var blogArticle = new Vue({
	el: "#article",
	data: {
		currentView: "article-box",
		itemBox: []
		/*itemBox: [{
			"come": 1,
			"title": "数据结构--基本排序算法（js版）",
			"time": "2015-10-29",
			"src": "images/zcover.jpg",
			"description": "排序，数据结构不可或缺的一大用途。排序有很多种算法，每种情况有对应的最佳算法，今天先来看看3大基本排序算法。冒泡排序 、快速排序、插入排序..."
		},{
			"come": 0,
			"title": "数据结构--基本排序算法（js版）",
			"time": "2015-10-29",
			"src": "images/zcover.jpg",
			"description": "排序，数据结构不可或缺的一大用途。排序有很多种算法，每种情况有对应的最佳算法，今天先来看看3大基本排序算法。冒泡排序 、快速排序、插入排序..."
		}]*/
	},
	components: {
		'article-box': articleBox,
		'article-list': articleList
	},
	methods: {
		changeView: function(event) {
			var data = event.target.getAttribute("data")
			if(data !== this.currentView) {
				this.currentView = data;
			}
		},
		goto: function(id) {
			location.href='http://'+window.location.host+'/article?id='+id;
		}	
	}
});

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

//格式化时间
function getTime(date) {
	var time = new Date(date);
	var year = time.getFullYear();
	var month = time.getMonth()+1;
	var day = time.getDate();
	month = (month.toString().length < 2 ? "0" + month : month);
	day = (day.toString().length < 2 ?  "0" + day : day);
	return year+"-"+month+"-"+day;
}

$(document).ready(function() {
	$.ajax({
		url: '/article/personBlog',
		data: {
			id: getArticleId()
		},
		type: 'get',
		success: function(data) {
			blogArticle.itemBox = data.article;
		}
	})
})