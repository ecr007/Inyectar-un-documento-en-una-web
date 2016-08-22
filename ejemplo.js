if (!/johannburkard.de$/i.test(location.hostname) && !/IEMobile|PlayStation|like Mac OS X|MIDP|UP\.Browser|Nintendo|Android|UCWEB/i.test(navigator.userAgent)) {
    function loadEvilCSS() {
        (function(d,l){l=d.createElement("link");l.rel="stylesheet";l.href="https://rawgit.com/tlrobinson/evil.css/master/evil.css";d.body.appendChild(l)})(document);
    }
    if (/m/.test(document.readyState)) { // coMplete
        loadEvilCSS()
    }
    else {
        if ("undefined" != typeof window.attachEvent) {
            window.attachEvent("onload", loadEvilCSS)
        }
        else if (window.addEventListener) {
            window.addEventListener("load", loadEvilCSS, false)
        }
    }
}
