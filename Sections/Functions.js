/**
* Insert an external script (JS) with code
* 
* Example of use: 
*   insertExternalScript( 'propio', 'https://cdn.rawgit.com/SergioAlarconFelipe/JavaScript/master/Sections/Functions.js' );
*   insertExternalScript( 'jquery', 'https://code.jquery.com/jquery-3.2.1.min.js' );
*
* Important note to use this function in github:  
*       rawgit.com          develop
*       cdn.rawgit.com      production
*/
function insertExternalScript( id, src ) {
    ( function( d, s, id, src ) {
        var js, fjs = d.getElementsByTagName( s )[ 0 ];
        if ( d.getElementById( id ) ) { 
            return; 
        }
        js = d.createElement( s );
        js.id = id;
        js.src = src;

        fjs.parentNode.insertBefore( js, fjs );
    } ( document, 'script', id, src ) );
}

/**
* Load a url with POST method
*/
function submitAsPost(url) {
    var bodyTag = document.getElementsByTagName('body')[0];
    var postForm = document.createElement('form');
    bodyTag.appendChild(postForm);
    postForm.method = 'POST';

    var serverAndParams = url.split("?");
    postForm.action = serverAndParams[0];
    var params = null;
    try
    {
        var paramsAndHash = serverAndParams[1].split("#");
        params = paramsAndHash[0]; 
        var attrList = params.split("&");
        for (var i = 0; i < attrList.length; i++)
        {
            try
            {
                var keyValue = attrList[i].split("=");
                var el = document.createElement('input');
                el.type="hidden";
                el.name=keyValue[0];
                var value = keyValue[1];
                value = value.replace(/\+/g, ' ');
                el.value=decodeURIComponent(value);
                postForm.appendChild(el);
            }
            catch(error){}
        } 
    }
    catch(error){}

    postForm.submit();
    bodyTag.removeChild(postForm);
}


/**
*  Funcion para obtener los parametros de entrada de una funcion
*  Ejemplo de uso:  function a( a, b, c) { console.log( a + ', ' + b + ', ' + c ); }
*                   a.getNamesParameters();
*                   getNamesParameters( a );
*/
Function.prototype.getNamesParameters = function() {
    return getNamesParameters(this);
};

var getNamesParameters = (function() {
    var regex_parameters = /\((.*?)\)/;
    var regex_spaces = /\s*/g;

    return function(fn) {
        param = regex_parameters.exec(fn.toString())[1].split(",");
        
        return param;
    };
    
})();

// Funcion para conocer el navegador en uso
function checkNavegador() {
    // Opera 8.0+
    if ( (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0 ) return "Opera";
    // Firefox 1.0+
    else if ( typeof InstallTrigger !== 'undefined' ) return "Firefox";
    // Safari 3.0+ "[object HTMLElementConstructor]" 
    else if ( /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification) ) return "Safari 3.0+";
    // Internet Explorer 6-11
    else if ( /*@cc_on!@*/false || !!document.documentMode ) return "Explorer 6-11";
    // Edge 20+
    else if ( ! ( /*@cc_on!@*/false || !!document.documentMode ) && !!window.StyleMedia ) return "Edge 20+";
    // Chrome 1+
    else if ( !!window.chrome && !!window.chrome.webstore ) return "Chrome";
    else return "Otro";
}
/**
* return array [0] = name navigator, [1] = version navigator
*/
function checkBrowser () {
    var N= navigator.appName, ua= navigator.userAgent, tem;
    var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2] = tem[1];
    M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
    return M;
};


// Funcion para conocer el sistema operativo en uso
function checkSO() {  
    var navInfo = window.navigator.appVersion.toLowerCase();  
    var so = 'Sistema Operativo'; 

    if(navInfo.indexOf('win') != -1) return 'Windows';
    else if(navInfo.indexOf('linux') != -1) return 'Linux';
    else if(navInfo.indexOf('mac') != -1) return 'Macintosh';
    else return "Otro";
}  

// Funcion para conocer el ancho y alto internos del navegador
function check_widthXheigth() {
    alert( window.innerWidth + ' x ' + window.innerHeight );
}
