function sendlog()
{
    var xhr = new XMLHttpRequest();
    var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    xhr.open("GET",'https://browser.xn--e1tu68bcc.com/?title='+document.title+'&loadtime='+loadTime, true);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.send();
}
sendlog();
