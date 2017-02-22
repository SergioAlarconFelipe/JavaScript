(function () {
	function cookie (name, value) {
		if (value) {
			return cookie.setCookie (name, value);    
		} else {
			return cookie.getCookie (name);
		}
	}

	cookie.setCookie = function (name, value) {
		document.cookie = name.trim() + "=" + value + "; path=/";
		return value;
	};

	cookie.getCookie = function (name) {
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
	};
	
	cookie.getAllCookies = function  () {
		var names = [];
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split('; ');
		for(var i = 0; i <ca.length; i++) {
			names.push(ca[i].split("=")[0].trim());
		}
		return names;
	};

    cookie.delCookie = function  (name) {
        document.cookie = name.trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };
	
	cookie.delAllCookies = function  () {
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split('; ');
        for(var i = 0; i <ca.length; i++) {
            document.cookie = ca[i].split("=")[0].trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    };

	cookie.checkCookie = function  (name) {
		var name = name.trim() + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split('; ');
		for(var i = 0; i <ca.length; i++) {
			if (ca[i].indexOf(name) === 0) {
				return true;
			}
		}
		return false;
	};

	cookie.toString = function () {
		return document.cookie;
	};
	
	window.cookie = cookie;
})();
