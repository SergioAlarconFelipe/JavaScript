# JavaScript Library

1. [API Ajax](#api-ajax)
2. [API Cookies](#api-cookies)
3. [API Dom](#api-dom)
4. [Api Objects](#api-objects)
5. [API Format](#api-format)

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

getCookie ("user");                             // return   user = {}
                                                // return   ""

delCookie ("user");

checkCookie ("user");                           // return   true
                                                // return   false
```

## API Dom

Use example:
```javascript
createElement ( {
    element: "div",
    text: "Sample",
    parent: document.body,
    attr: {
        "id": "idDiv",
        "class": "classDiv"
    },
    style: {
        border: "1px solid black"
    },
    event: {
        click: function () { alert(this); }
    },
    children: [
        createElement (),
        { 
            element: "a",
            text: "GitHub",
            attr: {
                "href": "https://github.com"
            }
        }
    ]
} );
```

## API Objects

Use example:
```javascript
obj = {
    prop1: "a",
    prop2: "1",
    prop3: true
};

listAllProperties(obj);                 // return   ["prop1", "prop2", "prop3"]
listAllProperties(obj, false);          // return   ["prop1", "prop2", "prop3"]
listAllProperties(obj, true);           // return   ["__defineGetter__", "__defineSetter__", "hasOwnProperty",
                                        //          "__lookupGetter__", "__lookupSetter__",
                                        //          "propertyIsEnumerable", "constructor", "toString",
                                        //          "toLocaleString", "valueOf", "isPrototypeOf",
                                        //          "__proto__", "prop1", "prop2", "prop3"]

obj[listAllProperties (obj)[0]];        // return   "a"
obj[listAllProperties (obj)[1]];        // return   "1"
obj[listAllProperties (obj)[2]];		// return	true
```

## API Format

Use example:
```javascript
formatCeros (2, 4);                     // return 	"0002"

uppercaseFirstLetter ("hello word!");   // return 	"Hello word!"
```
