/* API Ajax */
var ajax = (function () {
    function AJAXCrearObjeto (){
        var objetoAjax;
        
        if(window.XMLHttpRequest) {
            // navegadores que siguen los estandares
            objetoAjax = new XMLHttpRequest();
        } else {
            // navegadores obsoletos
            objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        return objetoAjax;
    }
    
    return function (param) {
        // Cargamos los parametros en la url
        var parametros = "";
        if (param.datos !== undefined) {
            for (var i = 0; i < param.datos.length; i++) {
                parametros += (i === 0) ? "?" : "&";
                parametros += param.datos[i].variable + "=" + param.datos[i].value;
            }
        }
        
        // Creamos el objeto XMLHttpRequest
        var objetoAjax = AJAXCrearObjeto(); 
        
        // Lanzamos la consulta
        if (param.method === undefined) param.method = "get";
        if (param.method === "get") {
            objetoAjax.open(param.method, param.url + parametros, true);
            objetoAjax.send();
        } else if (param.method === "post") {
            objetoAjax.open(param.method, param.url, true);
            objetoAjax.send(parametros);
        }
        
        // Asignamos la funcion para onerror
        if (param.callbackOnError !== undefined) objetoAjax.onerror = param.callbackOnError;
        
        // Asignamos la funcion para onprogress
        if (param.callbackOnProgress !== undefined) objetoAjax.onprogress = param.callbackOnProgress;
        
        // Asignamos la funcion para la peticion completada con exito, onsuccess
        objetoAjax.onreadystatechange = function () { //cuando cambie el estado de la peticion
            if (objetoAjax.readyState === 4 && objetoAjax.status === 200) { //estado de la conexión
                
                if (param.callbackOnSuccess !== undefined) param.callbackOnSuccess (objetoAjax.responseText);
            } else {
                //alert("ready state: " + objetoAjax.readyState + " - status: " + objetoAjax.status);
            }
        };
    };
})();

/* API Cookies */
var cookie = {
    setCookie: function (name, value) {
        document.cookie = name.trim() + "=" + value + "; path=/";
    },
    
    getCookie: function (name) {
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
    },

    getAllCookies: function  () {
        var names = [];
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split('; ');
        for(var i = 0; i <ca.length; i++) {
            names.push(ca[i].split("=")[0].trim());
        }
        return names;
    },

    delCookie: function  (name) {
        document.cookie = name.trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },

    delAllCookies: function  () {
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split('; ');
        for(var i = 0; i <ca.length; i++) {
            document.cookie = ca[i].split("=")[0].trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    },

    checkCookie: function  (name) {
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
}

/* API Objects */
function listAllProperties(o, tp = false){
    if (tp === true) {
        var objetoAInspeccionar;
        var resultado = [];

        for(objetoAInspeccionar = o; objetoAInspeccionar !== null; objetoAInspeccionar = Object.getPrototypeOf(objetoAInspeccionar)){
            resultado = Object.getOwnPropertyNames(objetoAInspeccionar);
        }   

        Object.keys(obj).forEach(
            function (p) {
                resultado.push (p);
            }
        );

        return resultado;
    } else {
        return Object.keys (o);
    }
}

/* API Format */
function formatCeros (num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function uppercaseFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
