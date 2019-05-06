var tools = {
    /* ajax方法 请求后台返回查询json
     * 承诺执行完某件事 成功失败返回对应 promise是异步ajax同步执行
     * @param url <string> 请求的地址
     * @param [query] <object> 请求携带的参数
     * @param [isJson] <boolean> 是否是json格式的数据
     */
    ajaxGetPromise :function(url, query, isJson) {
        //默认json json 可选参数
        isJson = isJson === undefined ?true : isJson;
        //query 可选参数 有拼接
        if(query){
            url += "?";
            for (var key in query){
                url += key + "=" + query[key] + "&";
            }
            url = url.slice(0,-1);
        }
        return new Promise((resolve, reject) => {
            let ajax = new XMLHttpRequest();
            ajax.open("GET",url,true);
            ajax.send(null);
            ajax.onreadystatechange = function() {
                if(ajax.readyState === 4){
                    if(ajax.status === 200) {
                        //数据返回成功
                        resolve(isJson ? JSON.parse(ajax.responseText) : ajax.responseText);
                    }else{
                        reject();
                    }
                }
            }
        })
    }
}