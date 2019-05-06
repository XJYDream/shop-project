class selectList{
    //接受返回后台的数据 渲染表格
    constructor(tbody) {
        this.tbody = document.querySelector(tbody);
        this.indexPage = 1;//分页 当前页（后台返回当前页数）
        //对象不可修改 方法
        Object.defineProperty(this, "count", {
            writable : false,
            value : 4
        })
        this.totalPage = 1;//分页 总页数（后台返回总计页数）
        this.init();
    }
    init() {
        let {indexPage, count} = this;
        //{indexPage, count} 传往后台数据  data后台返回json
        //分页 不同页面请求数据不同  需要返回数据渲染 故此js文件中写入分页量
        tools.ajaxGetPromise("api/v1/select.php", {indexPage, count}).then(data => {
            //缓存 强制刷新
            // console.log(data);
            //渲染返回的数据到当前分页中
            if(data.res_code === 1){
                this.render(data.res_body.data);
                this.totalPage = data.res_body.totalPage;
                //根据总页数渲染分页 传参 总页数 当前页数 以及init方法 
                //直接传该class
                pagination.render(this);
                //js之间 传参 调用
            }else{
                alert(data.res_message);
            }
        })
    }
    render(list) {
        //拼接字符串html 渲染append表格
        let html = "";
        list.forEach((shop,index) => {
            // console.log(1);
            html += `<tr data-id="${shop.id}">
            <td>${(this.indexPage-1)*this.count+index+1}</td>
            <td>${shop.name}</td>
            <td>
                <span>${shop.price}</span>
                <input type="text" class="inputPrice">                 
            </td>
            <td>
                <span>${shop.num}</span>
                <input type="text" class="inputNum"> 
            </td>
            <td>
                <button type="button" class="btn btn-xs btn-edit btn-success">编辑</button>
                <button type="button" class="btn btn-xs btn-del btn-danger">删除</button>
                <button type="button" class="btn btn-xs btn-ok btn-info ">确定</button>
                <button type="button" class="btn btn-xs btn-cancel btn-warning ">取消</button>
            </td>
        </tr>`;
        })
        this.tbody.innerHTML = html;
    }
}
let getShop = new selectList("#tbody");
