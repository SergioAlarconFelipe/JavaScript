Function.prototype.getNamesParameters = function() {
    return getNamesParameters(this);
};


var getNamesParameters = (function() {
    var regex_parameters = /\((.*?)\)/;
    var regex_spaces = /\s*/g;

    return function(fn) {
        return regex_parameters.exec(fn.toString())[1].split(",");
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
