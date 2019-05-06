class Pagination {
    constructor () {
        //ul next
        //id 命名 多字符- 
        //变量名 多字符 驼峰
        this.ul = document.querySelector("#pagination-render");
        this.next = document.querySelector("#next-page");
        this.bindEvent();//事件委托 多次事件源判定 一次绑定事件 
    }
    render(selectList){
        // console.log(indexPage);
        this.selectList = selectList;
        //渲染前删除之前分页的数据
        Array.from(this.ul.querySelectorAll(".page-li")).forEach(li => {
            li.remove();//未兼容
        })
        for(let i = 1; i <= this.selectList.totalPage; i++) {
            //indexPage totalPage 从1开始 
            let li = document.createElement("li");
            //字符串转为数字才能够全等
            li.className = i === this.selectList.indexPage ? "active page-li" : "page-li";
            //为了删除相同class的li
            
            //className classList 区别
            li.innerHTML = `<a class="page" href="javascript:;">${i}</a>`;
            //为了找到同类的事件源
            //copy的bootstrap 原本有序号 亦写入
            this.ul.insertBefore(li, this.next);
        }
    }
    bindEvent(){
        this.ul.onclick = e => {
            //获取事件源 事件源为a不是li
            let target = e.target;
            //事件源判断
            // let targetClass = Array.from(target.classList);
            let targetClass = [...target.classList];
            if(targetClass.includes("page")) {
                //该当前页为点击分页
                this.selectList.indexPage = Number(target.innerHTML);
                //innerHTML 取到的是字符串
                this.selectList.init();
            }else if(targetClass.includes("prev-page")) {
                if(--this.selectList.indexPage<1){
                    this.selectList.indexPage = 1;
                    return;//不请求 节省资源
                }
                this.selectList.init();
            }else if(targetClass.includes("next-page")) {
                if(++this.selectList.indexPage>this.selectList.totalPage){
                    this.selectList.indexPage = this.selectList.totalPage;
                    return;//不请求 节省资源
                }
                this.selectList.init();
            }
        }

    }
}
let pagination = new Pagination();