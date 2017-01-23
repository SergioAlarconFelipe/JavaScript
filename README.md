# JavaScript Library

1. [API Ajax](URL "https://github.com/SergioAlarconFelipe/JavaScript#api-ajax")
2. [API Cookies](URL "https://github.com/SergioAlarconFelipe/JavaScript#api-cookies")

## API Ajax

Use example:
```javascript
ajax ( { url: "getDestinos.php", datos: [{ variable: "var", valor: 1 }],
    callbackSuccess: exito,
    callbackOnProgress: progress,
    callbackOnError: error,
    method: "get" } );
    
function exito (respuesta) {
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
