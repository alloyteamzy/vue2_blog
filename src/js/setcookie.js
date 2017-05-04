var setCookie = {
    user: '',
    pwd: '',
    getInfo: function(name, passpwd) {
        this.user = name;
        this.pwd = passpwd;
    },
    addCookie: function(name, value, days, path) { /**添加设置cookie**/
        var name = escape(name);
        var value = escape(value);
        var expires = new Date();
        expires.setTime(expires.getTime() + days * 3600000 * 24);
        //path=/，表示cookie能在整个网站下使用，path=/temp，表示cookie只能在temp目录下使用  
        path = path == "" ? "" : ";path=" + path;
        //GMT(Greenwich Mean Time)是格林尼治平时，现在的标准时间，协调世界时是UTC  
        //参数days只能是数字型  
        var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();
        document.cookie = name + "=" + value + _expires + path;
    },
    getCookieValue: function(name) { /**获取cookie的值，根据cookie的键获取值**/
        //用处理字符串的方式查找到key对应value  
        var name = escape(name);
        //读cookie属性，这将返回文档的所有cookie  
        var allcookies = document.cookie;
        //查找名为name的cookie的开始位置  
        name += "=";
        var pos = allcookies.indexOf(name);
        //如果找到了具有该名字的cookie，那么提取并使用它的值  
        if (pos != -1) { //如果pos值为-1则说明搜索"version="失败  
            var start = pos + name.length; //cookie值开始的位置  
            var end = allcookies.indexOf(";", start); //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置  
            if (end == -1) end = allcookies.length; //如果end值为-1说明cookie列表里只有一个cookie  
            var value = allcookies.substring(start, end); //提取cookie的值  
            return (value); //对它解码        
        } else { //搜索失败，返回空字符串  
            return "";
        }
    },
    deleteCookie: function(name, path) { /**根据cookie的键，删除cookie，其实就是设置其失效**/
        var name = escape(name);
        var expires = new Date(0);
        path = path == "" ? "" : ";path=" + path;
        document.cookie = name + "=" + ";expires=" + expires.toUTCString() + path;
    },

    /**实现功能，保存用户的登录信息到cookie中。当登录页面被打开时，就查询cookie**/
    setInfo: function() {
        var userNameValue = this.getCookieValue("userName");
        var userPassValue = this.getCookieValue("userPass");
        return {
            name: userNameValue,
            mypwd: userPassValue
        };
    },
    userLogin: function() { /**用户登录，其中需要判断是否选择记住密码**/
        //简单验证一下  
        var userName = this.user;
        if (userName == '') {
            alert("请输入用户名。");
            return;
        }
        var userPass = this.pwd;
        if (userPass == '') {
            alert("请输入密码。");
            return;
        }
        var objChk = document.getElementById("chkRememberPass");
        if (objChk.checked) {
            //添加cookie  
            this.addCookie("userName", userName, 7, "/");
            this.addCookie("userPass", userPass, 7, "/");
        } else {}
    }
}
export {
    setCookie
}