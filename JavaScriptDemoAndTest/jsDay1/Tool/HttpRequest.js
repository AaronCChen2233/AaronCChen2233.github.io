function GetHttpRequest(url, senddate, callbackfunction)
{
    var xmlHttp = new XMLHttpRequest;

    xmlHttp.open("GET", url, true); 
    xmlHttp.onload = function () {
        if (xmlhttp.readyState===xmlHttp.DONE && xmlhttp.status==200){
            if( typeof callbackfunction === 'function' )
            callbackfunction(xmlhttp.responseText);
        }
    };

    xmlHttp.send(senddate);
}

function PostHttpRequest(url, senddate, callbackfunction)
{
    var xmlHttp = new XMLHttpRequest;

    xmlHttp.open("POST", url, true); 
    xmlHttp.onload = function () {
        if (xmlhttp.readyState===xmlHttp.DONE && xmlhttp.status==200){
            if( typeof callbackfunction === 'function' )
            callbackfunction(xmlhttp.responseText);
        }
    };

    xmlHttp.send(senddate);
}