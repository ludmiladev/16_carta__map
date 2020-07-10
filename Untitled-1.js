!function () {
    const t = function () {
        try {
            return localStorage, !1
        } catch (t) {
            return !0
        }
    }();
    if (t) {
        const o = {main_op: "third-party-cookies", cookies_status: !t};
        chrome.runtime.sendMessage(o)
    }
}();