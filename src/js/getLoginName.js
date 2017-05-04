function getCookieValue(name) {
    var name = escape(name);
    var allcookies = document.cookie;
    name += "=";
    var pos = allcookies.indexOf(name);
    if (pos != -1) {
        var start = pos + name.length;
        var end = allcookies.indexOf(";", start);
        if (end == -1) end = allcookies.length;
        var value = allcookies.substring(start, end);
        return (value);
    } else {
        return "";
    }
}

function setInfo() {
    var userNameValue = getCookieValue("userName");
    return {
        name: userNameValue
    };
}
// var login_name = unescape(setInfo().name); //获取当前登录用户名
function getName() {
    return unescape(setInfo().name)
}
export { //很关键
    getName
}