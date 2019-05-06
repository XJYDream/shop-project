class EditTable {
    // 编辑操作 input span 均在tbody内部
    constructor (tbody) {
        this.tbody = document.querySelector(tbody);
        console.log(this.tbody);
        this.bindEvents();
    }
    bindEvents() {
        this.tbody.onclick = e => {
            // let e = e || e.event;//用不到
            let target = e.target || e.srcElement;
            let tr = target.parentNode.parentNode;
            let classList = Array.from(target.classList);
            console.log(1);
            if(classList.includes("btn-ok")) {
                this.okBtnClick(tr);
            }else if(classList.includes("btn-cancel")) {
                this.cancelBtnClick(tr);
            }else if(classList.includes("btn-del")) {
                this.delBtnClick(tr);
            }else if(classList.includes("btn-edit")) {
                this.editBtnClick(tr);console.log(1);
            }
        }
    }
    editBtnClick(tr) {
        
        Array.from(tr.querySelectorAll("span")).forEach(span => {
            span.nextElementSibling.value = span.innerHTML;
        })
        tr.classList.add("edit");
    }
    okBtnClick(tr) {
        //后台交互
        let inputPrice = tr.querySelector(".inputPrice"),
            inputNum = tr.querySelector(".inputNum"),
            id = tr.getAttribute("data-id"),
            price = inputPrice.value,
            num = inputNum.value;
            console.log(inputNum,inputPrice);
        tools.ajaxGetPromise("api/v1/ok.php", {id, price, num}).then(data => {
            // console.log(data);
            tr.classList.remove("edit");
            alert(data.res_message);
            if(data.res_code === 1){
                // span input
                inputPrice.previousElementSibling.innerHTML = inputPrice.value;
                inputNum.previousElementSibling.innerHTML = inputNum.value;
            }
        })
        // array.forEach(function(currentValue, index, arr), thisValue)
        // foreach 遍历方法 内部回调函数接受返回值 遍历对象 索引
        // Array.from(tr.querySelectorAll("span")).forEach(span => {
        //     span.innerHTML = span.nextElementSibling.value;
        // })
        // tr.classList.remove("edit");
    }
    cancelBtnClick(tr) {
        tr.classList.remove("edit");
    }
    delBtnClick(tr) {
        //后台交互
        if(confirm("确定删除当前商品吗")) {
            let id = tr.getAttribute("data-id");
            tools.ajaxGetPromise("api/v1/delate.php", {id}).then(data => {
                console.log(data.res_code);
                if(data.res_code === 1){
                    alert(data.res_message);
                    //给用户的index顺序 重新获取
                    getShop.init();
                }else{
                    alert(data.res_message);
                }
            })
        }
    }
}
new EditTable("#tbody");