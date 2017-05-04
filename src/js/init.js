! function(win) {
    function w() {
        var eleWid = htmlEle.getBoundingClientRect().width;

        if(eleWid / dprValue > 640){
            eleWid = 640 * dprValue;
        }
        win.rem = eleWid / 16;
        if(win.rem >= 40){win.rem=40};
        htmlEle.style.fontSize = win.rem + "px";
    }

    var dprValue, initScaleValue, t, doc = win.document, htmlEle = doc.documentElement, viewport = doc.querySelector('meta[name="viewport"]'), metaFlexible = doc.querySelector('meta[name="flexible"]');
    if (viewport) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        o && (initScaleValue = parseFloat(o[2]), dprValue = parseInt(1 / initScaleValue))
    } else {
        if (metaFlexible) {
            var o = metaFlexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
            o && (dprValue = parseFloat(o[2]), initScaleValue = parseFloat((1 / dprValue).toFixed(2)))
        }
    }
    if (!dprValue && !initScaleValue) {
        var isAndroid = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi)), pixelRatio = win.devicePixelRatio;
        if(isAndroid){
            if(pixelRatio >= 3){
                dprValue=3;
            }else if(pixelRatio >= 2){
                dprValue=2;
            }else{
                dprValue=1;
            }
        }else{
            dprValue=pixelRatio;
        }
        initScaleValue = 1 / dprValue;
    }
    if (htmlEle.setAttribute("data-dpr", dprValue), !viewport) {
        if (viewport = doc.createElement("meta"), viewport.setAttribute("name", "viewport"), viewport.setAttribute("content", "initial-scale=" + initScaleValue + ", maximum-scale=" + initScaleValue + ", minimum-scale=" + initScaleValue + ", user-scalable=no"), htmlEle.firstElementChild) {
            htmlEle.firstElementChild.appendChild(viewport)
        } else {
            var newDiv = doc.createElement("div");
            newDiv.appendChild(viewport), doc.write(newDiv.innerHTML)
        }
    }
    win.dpr = dprValue;
    win.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300);
    }, false);
    if("complete" === doc.readyState){
        doc.body.style.fontSize = 12 * dprValue + "px";
    }
    doc.addEventListener("DOMContentLoaded", function() {
        doc.body.style.fontSize = 12 * dprValue + "px";
    }, false)
    w();
}(window);