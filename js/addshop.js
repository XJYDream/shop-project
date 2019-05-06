class addShop {
    constructor() {
        //添加商品信息  名称 价格 数量 添加按钮
        this.inputName = document.querySelector("#inputName");
        this.inputPrice = document.querySelector("#inputPrice");
        this.inputNum = document.querySelector("#inputNum");
        this.addBtn = document.querySelector("#btn-add-shop");
        this.init();
    }
    init() {
        this.addBtn.onclick = () => {
            //apache localhost 下 不能console
            //前端 格式正确 后台 不为空
            let name = this.inputName.value,
                price = this.inputPrice.value,
                num = this.inputNum.value;
            //简单验证不为空
            if(name === "" || price === "" || num === ""){
                alert("输入信息不能为空，请重试");
                return;
            }
            tools.ajaxGetPromise("api/v1/addshop.php", {name, price, num}).then(date => {
                //console.log(date);//返回操作成功与否
                if(res_code === 1) {
                    alert(date.res_message);
                    this.inputName.value = this.inputNum.value = this.inputPrice.value = "";
                    $('#myModal').modal('hide');
                    getShop.init();//交叉使用 重要的前面 部分调用声明全局变量接受上一个class
                }
            })
        }
    }
}
new addShop();