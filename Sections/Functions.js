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
//insertExternalScript( 'jquery', 'https://code.jquery.com/jquery-3.2.1.min.js' );

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

// Funcion para comprimir cadenas
String.prototype.compress = function (asArray) {
	"use strict";
	// Build the dictionary.
	asArray = (asArray === true);
	var i,
		dictionary = {},
		uncompressed = this,
		c,
		wc,
		w = "",
		result = [],
		ASCII = '',
		dictSize = 256;
	for (i = 0; i < 256; i += 1) {
		dictionary[String.fromCharCode(i)] = i;
	}

	for (i = 0; i < uncompressed.length; i += 1) {
		c = uncompressed.charAt(i);
		wc = w + c;
		//Do not use dictionary[wc] because javascript arrays
		//will return values for array['pop'], array['push'] etc
	   // if (dictionary[wc]) {
		if (dictionary.hasOwnProperty(wc)) {
			w = wc;
		} else {
			result.push(dictionary[w]);
			ASCII += String.fromCharCode(dictionary[w]);
			// Add wc to the dictionary.
			dictionary[wc] = dictSize++;
			w = String(c);
		}
	}

	// Output the code for w.
	if (w !== "") {
		result.push(dictionary[w]);
		ASCII += String.fromCharCode(dictionary[w]);
	}
	return asArray ? result : ASCII;
};


// Funcion para descomprimir cadenas
String.prototype.decompress = function () {
	"use strict";
	// Build the dictionary.
	var i, tmp = [],
		dictionary = [],
		compressed = this,
		w,
		result,
		k,
		entry = "",
		dictSize = 256;
	for (i = 0; i < 256; i += 1) {
		dictionary[i] = String.fromCharCode(i);
	}

	if(compressed && typeof compressed === 'string') {
		// convert string into Array.
		for(i = 0; i < compressed.length; i += 1) {
			tmp.push(compressed[i].charCodeAt(0));
		}
		compressed = tmp;
		tmp = null;
	}

	w = String.fromCharCode(compressed[0]);
	result = w;
	for (i = 1; i < compressed.length; i += 1) {
		k = compressed[i];
		if (dictionary[k]) {
			entry = dictionary[k];
		} else {
			if (k === dictSize) {
				entry = w + w.charAt(0);
			} else {
				return null;
			}
		}

		result += entry;

		// Add w+entry[0] to the dictionary.
		dictionary[dictSize++] = w + entry.charAt(0);

		w = entry;
	}
	return result;
};

// Funciones para trabajar aleatoriamente con listados (objetos y arrays)
Array.prototype.getRandomKey = function() {
	return Math.floor( Math.random() * Object.values( this ).length );
}

Array.prototype.getRandomValue = function() {
	return this[ this.getRandomKey() ];
}

Object.prototype.getRandomKey = function() {
	return Object.keys( this ).getRandomValue();
}

Object.prototype.getRandomValue = function() {
	return this[ this.getRandomKey() ];
}

Object.prototype.equals = function( value ) {
	return JSON.stringify( this ) === JSON.stringify( value );
}

Object.prototype.getKeyByValue = function( value ) {
	var s = -1;
	Object.values( c ).forEach( function( e, i ) {
		if( e.equals( value ) ) {
			s = i;
		}
	} )

	if( s == -1 ) {
		return null;
	} else {
		return Object.keys( this )[ s ];
	}
}

var a = [ 15, 13, 18 ];
a.getRandomKey();								// Return 0, 1 or 2
a.getRandomValue();								// Return 15, 13 or 13

var b = { a21: 25, a34: 33, a42: 48 };
b.getRandomKey();								// Return "a21", "a34" or "a42"
b.getRandomValue();								// Return 25, 33 or 48
b.getKeyByValue( 33 );								// Return "a34"


var c = { a21: [ 25, "hello" ], a34: { a341: 33, a342: "world" }, a42: 48 };
c.getRandomKey();								// Return "a21", "a34" or "a42"
c.getRandomValue();								// Return [ 25, "hello" ], { a341: 33, a342: "world" } or 48
c.getKeyByValue( { a341: 33, a342: "world" } );					// Return "a34"

// Funcion para saber si un elemento se esta mostrando en la pantalla o esta posicionado fuera
// 	Return: 0 = Elemento no visible actualmente (necesario scroll para verlo)
//		1 = Elemento visible completamente
//		2 = Elemento visible parcialmente
function isElementDisplaying( element ) {
	var bounding = element.getBoundingClientRect();
	var salida = 0;
	if ( bounding.top >= 0 && bounding.left >= 0 && bounding.right <= ( window.innerWidth || document.documentElement.clientWidth ) && bounding.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) ) {
		salida = 1;
	} else if ( bounding.top <= ( window.innerHeight || document.documentElement.clientHeight ) && bounding.left <= ( window.innerWidth || document.documentElement.clientWidth ) && bounding.right >= 0 && bounding.bottom >= 0 ) {
		salida = 2;
	}
	
	return salida;
}

isElementDisplaying( document.getElementById( 'commit-summary-input' ) );

/**
 *  Create unique UUID
 *  
 *  https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
 */
/*
function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function(c) {
        var r = ( dt + Math.random() * 16 ) % 16 | 0;
        dt = Math.floor( dt / 16 );
        return ( c == 'x' ? r :( r & 0x3 | 0x8 ) ).toString( 16 );
    } );
    return uuid;
}
*/
function create_UUID( prop ) {
	if( prop === undefined ) {
		prop = {};
	}
	if( prop.separator === undefined ) {
		prop.separator = '|';
	}
	if( prop.pattern === undefined ) {
		prop.pattern = 'dth' + prop.separator + 'hhhhhh';
	}
	
	prop.pattern = prop.pattern.replace( /(dtb|dtd|dth|b|d|h)/gm, function( c ) {
		var value = 0;
		switch( c ) {
			case 'dtb':
				value = new Date().getTime().toString( 2 );
				break;
			case 'dtd':
				value = new Date().getTime().toString( 10 );
				break;
			case 'dth':
				value = new Date().getTime().toString( 16 );
				break;
			case 'b':
				value = Math.floor( Math.random() * 2 ).toString( 2 );
				break;
			case 'd':
				value = Math.floor( Math.random() * 10 ).toString( 10 );
				break;
			case 'h':
				value = Math.floor( Math.random() * 16 ).toString( 16 );
				break;
		}
		return value;
	} )
	
	if( prop.prefix !== undefined ) {
		prop.pattern = prop.prefix + prop.separator + prop.pattern;
	}
	if( prop.subfix !== undefined ) {
		prop.pattern = prop.pattern + prop.separator + prop.subfix;
	}
	
	return prop.pattern;
}

var separator = '|';
var opts = {
    //prefix: 'id_pre',
    subfix: 'id_sub',
    separator: separator,
    pattern: 'dth' + separator + 'hhhhhh',
};
console.log( create_UUID( opts ) );
//	"170c684f840|3995fc|id_sub"
//	"170c6851780|3c8fff|id_sub"
//	"170c6855600|4cf6e8|id_sub"

/**
Funcion lanzar eventos swipe en desktop y movil
*/
( function( element ) {
    element.addEventListener('touchstart', start, false);
    element.addEventListener('touchmove', move, false); 
    element.addEventListener('touchend', end, false);

    element.addEventListener('mousedown', start, false);
    element.addEventListener('mousemove', move, false);
    element.addEventListener('mouseup', end, false);

    var pxSensibility = 100;
    var touching = false;
    var direction = 'none';
    var touchX = false;

    function start( event ) {
        touching = true;
        touchX = event.x;
    }
    function end( event ) {
        touching = false;
        direction = 'none';
    }
    function move( event ) {
        if( touching ) {
            if( direction === 'none' ) {
                if( event.x > touchX ) {
                    direction = 'right';
                }
                else if( event.x < touchX ) {
                    direction = 'left';
                }
            }

            if( direction === 'right' && event.x < touchX ) {
                touching = false;
                direction = 'none';
            }
            else if( direction === 'left' && event.x > touchX ) {
                touching = false;
                direction = 'none';
            }

            if( event.x >= touchX + pxSensibility ) {
                touching = false;
                direction = 'none';
                
                var cE = new CustomEvent(
                    "swiperight", 
                    {
                        bubbles: true,
                        cancelable: true
                    }
                );
                event.srcElement.dispatchEvent( cE );
            }
            else if( event.x <= touchX - pxSensibility ) {
                touching = false;
                direction = 'none';
                
                var cE = new CustomEvent(
                    "swipeleft", 
                    {
                        bubbles: true,
                        cancelable: true
                    }
                );
                event.srcElement.dispatchEvent( cE );
            }
        }
    }
} )( document );

document.getElementById( 'h2' ).addEventListener('swiperight', function( event ) { console.log( 1, event ); }, false);
document.getElementById( 'h2' ).addEventListener('swipeleft', function( event ) { console.log( 2, event ); }, false);
