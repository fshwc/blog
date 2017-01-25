var goodsList = {
	template:'\
		<tr>\
			<td>{{index}}</td>\
			<td>{{good.name}}</td>\
			<td><span @click="minus(good.id,index)">-</span><input type="text" v-model=number v-on:blur="changeModel(good.id)"><span @click="plus(good.id,index)">+</span></td>\
			<td>{{number * good.price}}</td>\
			<td><button class="btn btn-success" @click="remove(good.goodid,index)">删除</button></td>\
		</tr>',
	props: ['good','index'],
	data: function() {
		return {number : this.good.number};
	},
	methods: {
		changeModel: function(id) {
			this.changeCount(id,this.number);
		},
		changeCount: function(id,number) {
			$.ajax({
				url: '/good/changeCount',
				data: {
					id: id,
					number: number
				},
				type: 'post',
				success: function(data) {
					if(data.status == 99999) {
						this.number = number;
					}
				}
			})
		},
		remove: function(id,index) {
			$.ajax({
				url: '/good/removeGood',
				data: {
					id: id
				},
				type: 'post',
				success: function(data) {
					if(data.status == 99999) {
						app.goods.splice(index,1);
					}
				}
			})		
		},
		minus: function(id, index) {
			if(this.good.number > 1) {	
				--this.number;			
				this.changeCount(id,this.number);
			}else {
				alert("最少选一件");
			}
		},
		plus: function(id, index) {
			++this.number;			
			this.changeCount(id,this.number);
		}
	}
};

var app = new Vue({
	el: '#cart',
	data: {
		goods: [],
	},
	components: {
		'goods-list' : goodsList
	},
	methods: {
		removeArticle: function(id) {
			alert(id);
		}
	}
})

$(document).ready(function() {
	$.ajax({
		url: '/good/getPersonGoods',
		type: 'get',
		data: null,
		success: function(data) {
			if(data == "noMatch") {
				alert("你未登录，请先登录!");
				//location.href='http://'+window.location.host+'/html/signin.html';
			}else {
				app.goods = data.good;
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