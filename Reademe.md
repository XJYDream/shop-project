## 某东商品管理系统

##### 流程

- 文件夹 css images js api（ php 数据库配置接口） libs(框架环境)环境配置 bootstrap jquery） Apache服务器下
- 首页静态页框架bootstrap搭建 删改代码 添加属性 以及其他基本自定义覆盖的index.css
- 

#### 系统功能

- 登录
- 注册
- 商品展示（数据库返回数据渲染）
- 商品修改 （数据库操作 重新渲染）
- 商品删除 （数据库操作 重新渲染）
- 商品录入  （数据库操作 重新渲染）

#### 使用技术

-  hHTML5
- CSS3
- JavaScript
- Ajax
- BootStrap(前端框架 h5 css js)
- PHP(简单后台数据库建立 增删改查 后台与服务器 与前端接口摸索)
- MySql(可视化数据库)

#### GitHub 上传注释

- feat: 新功能（feature）
- fix: 修补bug
- docs: 文档操作（documentation）
- style: 格式 （不想代码运行的变动）
- refactor: 重构（既不是新增功能，也不是修改bug）
- test : 增加测试
- chore : 构建过程或辅助工具的变动（chore日常事务）





#### 接口文档

- 模拟假数据 网址 or简单后台操作 自建数据库 php代码 config
- 前后端数据传输 方法封装熟悉 cookie  php  数据库 

##### 查询所有数据

- url : api/v1/select.php

- method: get

- query: null

- date :{

  ​     res-code: 1

  ​	res-message:1 数据返回成功

  ​			0 请求失败 网络错误 重试

  ​	red-body:date{

  ​				json

  ​			}

  }
  #### 添加接口文档
  - url ； api/v1/add.php
  - method : get
  - query : {name, price, num}
  - data : {
      res_code : 1, //1成功 ，0 失败
      res_message :  "添加成功"  ||  "网络错误，添加失败，请重试",
      res_body : {id, name, price, num}
  }
  
  }



##### 编辑商品确定接口

- url :api/v1/ok.php

- method : get

- query ： {id, price, num}

- data : {

  res_code : 1, // 1代表添加成功，0代表失败

  res_message:   "更新成功"  ||  "网络错误，更新失败，请重试"

  }

  ​


#####注册

- url: api/v1/register.php

- method : post

- query : {username, password}

- data : {

  res_code : 1, // 1代表添加成功，0代表失败

  res_message:   "注册成功"  ||  "网络错误，注册失败，请重试"

  }

##### 登录

- url: api/v1/login.php

- method : post

- query : {username, password}

- data : {

  res_code : 1, // 1代表添加成功，0代表失败

  res_message:   "登录成功"  ||  "用户名或密码错误"

  }



####  待完善

- 注册
- 登录
- 密码验证
- 未登录主页显示内容