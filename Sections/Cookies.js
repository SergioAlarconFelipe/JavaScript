function setCookie (name, value) {
    document.cookie = name.trim() + "=" + value + "; path=/";
}

function getCookie (name) {
    var name = name.trim() + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function delCookie (name) {
    document.cookie = name.trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function checkCookie (name) {
    var name = name.trim() + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split('; ');
    for(var i = 0; i <ca.length; i++) {
        if (ca[i].indexOf(name) === 0) {
            return true;
        }
    }
    return false;
}
