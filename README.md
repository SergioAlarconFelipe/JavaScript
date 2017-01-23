# JavaScript Library

1. [API Ajax](#api-ajax)
2. [API Cookies](#api-cookies)
3. [API Dom](#api-dom)

## API Ajax

Use example:
```javascript
ajax ( { 
    url: "getDestinos.php",
    datos: [ {
        variable: "var",
        value: 1
    } ],
    callbackOnSuccess: success,
    callbackOnProgress: progress,
    callbackOnError: error,
    method: "get" 
} );
    
function success (respuesta) {
    console.log (respuesta);
}

function progress (e) {
    var percent = (e.position / e.totalSize) * 100;
    
    console.log (percent + "%");
}

function error () {
    alert ("Error: " + e.target.status);
}
```

## API Cookies

Use example:
```javascript
setCookie ("user", JSON.stringify(user));

getCookie ("user");

detCookie ("user");
```

## API Dom

Use example:
```javascript
createElement ( {
    element: "div",
    text: "Sample",
    parent: "document.body",
    attr: {
        "id": "idDiv",
        "class": "classDiv"
    },
    children: [
        createElement ()
    ]
} );
```
