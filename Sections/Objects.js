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
