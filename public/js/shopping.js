var userid = null,        //当前登录人的id
	loginName = null;     //当前登录人的name

Vue.component('goods-list',{
	template: '\
		<div class="goodsItem">\
            <ul class="goditem">\
                <li class="godpic"><img :src="goods.address"></li>\
                <li class="godprice">￥{{goods.price}}</li>\
                <li class="godinfo">{{goods.description}}</li>\
                <li class="godadd"><a href="javascript:;" @click="add(goods.id)">{{havedAdd(goods.id)}}</a></li>\
            </ul>\
        </div>',
    props: ['goods'],
    methods: {
    	add: function(id) {    		
    		this.$emit('change',id);
    	},
    	havedAdd: function(id) {
    		console.log(id);
    		console.log(app.hasBuy.indexOf(id));
    		return app.hasBuy.indexOf(id) >= 0 ? "移出购物车" : "加入购物车";
    	}
    }
});

var app = new Vue({
	el: "#goods",
	data: {
		good: [],
		hasBuy: [],
	},
	computed: {
		num: function() {
			return this.hasBuy.length;
		}
	},
	methods: {
		addGood: function(id) {
			if(userid && loginName) {
				var i = this.hasBuy.indexOf(id)
				if(i == -1) {
					$.ajax({
						url: '/good/addGood',
						type: 'post',
						data: {
							id: id
						},
						success: function(data) {
							if(data.status == 99999) {
								alert("添加成功");
								app.hasBuy.push(id);
							}
						}
					});				
				}else {
					if(confirm("是否要移除商品")) {
						$.ajax({
							url: '/good/removeGood',
							type: 'post',
							data: {
								id: id
							},
							success: function(data) {
								if(data.status == 99999) {
									app.hasBuy.splice(i,1);
									alert("移除成功");
								}						
							}
						});
					}
				}
			}else {
				alert("你还没登录，请先登录");
				location.href='http://'+window.location.host+'/html/signin.html';
			}			
		},
	}
});

$(document).ready(function() {
	$.ajax({
		url: '/good',
		type: 'get',
		data: null,
		success: function(data) {
			app.good = data.data.results;
		}
	});
	$.ajax({
		url: '/good/hasgood',
		type: 'post',
		data: null,
		success: function(data) {
			for(var i = 0; i < data.data.length; i++) {
				app.hasBuy.push(data.data[i].goodid);				
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
})