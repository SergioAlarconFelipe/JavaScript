# JavaScript Library

1. [API Ajax](#api-ajax)
2. [API Cookies](#api-cookies)

## API Ajax

Use example:
```javascript
ajax ( { url: "getDestinos.php", datos: [{ variable: "var", valor: 1 }],
    callbackOnSuccess: success,
    callbackOnProgress: progress,
    callbackOnError: error,
    method: "get" } );
    
function success (respuesta) {
    console.log (respuesta);
}

function progress (e) {
    var porcentajeCompleto = (e.position / e.totalSize) * 100;
    
    console.log (porcentajeCompleto + "%");
}

function error () {
    alert("Error " + e.target.status + " ocurrido mientras se recibía el documento.");
}
```

## API Cookies

Use example:
```javascript
setCookie ("user", JSON.stringify(user));

getCookie ("user");

detCookie ("user");
```
