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
            for (i = 0; i < param.datos.length; i++) {
                parametros += (i === 0) ? "?" : "&";
                parametros += param.datos[i].variable + "=" + param.datos[i].valor;
            }
        }
        
        // Creamos el objeto XMLHttpRequest
        var objetoAjax = AJAXCrearObjeto(); //crea el objeto XMLHttpRequest dependiendo del navegador
        
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
        if (param.callbackOnError !== undefined) objetoAjax.onerror = callbackOnError;
        
        // Asignamos la funcion para onprogress
        if (param.callbackOnProgress !== undefined) objetoAjax.onprogress = param.callbackOnProgress;
        
        // Asignamos la funcion para la peticion completada con exito
        objetoAjax.onreadystatechange = function () { //cuando cambie el estado de la peticion
            if (objetoAjax.readyState === 4 && objetoAjax.status === 200) { //estado de la conexión
                
                if (param.callbackExitoso !== undefined) param.callbackOnSuccess (objetoAjax.responseText);
            } else {
                //alert("ready state: " + objetoAjax.readyState + " - status: " + objetoAjax.status);
            }
        };
    };
})();
