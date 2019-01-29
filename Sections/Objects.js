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

// Order objs by property
data = {
	1: { n: 'n1', orden: 2 },
	2: { n: 'n2', orden: 1 },
}

function compare( a, b ) {
	if( a.orden < b.orden )
		return -1;
	if( a.orden > b.orden )
		return 1;
	return 0;
}
function compare( a, b ) {
	return a.orden - b.orden;
}

array = Object.values( data ).sort( compare );
Object.assign( {}, array );
