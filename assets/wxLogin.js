!function (e, t) {
    e.WxLogin = function (e) {
        var r = "default";
        !0 === e.self_redirect ? r = "true" : !1 === e.self_redirect && (r = "false");
        var i = t.createElement("iframe"),
            n = "https://open.weixin.qq.com/connect/qrconnect?appid=" + e.appid + "&scope=" + e.scope + "&redirect_uri=" + e.redirect_uri + "&state=" + e.state + "&login_type=jssdk&self_redirect=" + r + "&styletype=" + (e.styletype || "") + "&sizetype=" + (e.sizetype || "") + "&bgcolor=" + (e.bgcolor || "") + "&rst=" + (e.rst || "");
        n += e.style ? "&style=" + e.style : "", n += e.href ? "&href=" + e.href : "", n += "en" === e.lang ? "&lang=en" : "", n += 1 === e.stylelite ? "&stylelite=1" : "", i.src = n, i.frameBorder = "0", i.allowTransparency = "true", i.scrolling = "no", i.width = "300px", i.height = "400px", i.sandbox="allow-scripts allow-top-navigation allow-same-origin";
        var l = t.getElementById(e.id);
        l.innerHTML = "", l.appendChild(i)
    }
}(window, document);
