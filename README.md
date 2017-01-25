# blog
自制简易博客，后台运用Node.js的Express框架，使用MYSQL作为数据库，Vue.js搭建前端

### 用到的知识
 - node.js的Express框架
 - vue.js
 - mysql
 
### 如何运行
 - 此系统是基于nodejs环境开发的，所以要求本机已安装nodejs环境，把controll文件夹中mysql.js里的数据库连接名与密码改为本机的连接名与密码。
   进入根目录，在控制台中输入node index.js启动服务器。本服务器监听的端口号为3000。
 - 首页：http://localhost:3000/html/home.html。
 - 商城：http://localhost:3000/html/shopping.html。
 - 文章页面：http://localhost:3000/article?id=13。id为文章id
 - 编辑文章或添加文章页面：http://localhost:3000/html/addArticle.html?id=13。id为文章id
 - 个人文章管理页面：http://localhost:3000/html/administration.html?id=10。id为用户id
 - 个人购物车页面：http://localhost:3000/good/personalCart。
 - 登陆页：http://localhost:3000/html/signin.html。
