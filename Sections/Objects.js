function listAllProperties(o){
   var objetoAInspeccionar;
   var resultado = [];

   for(objetoAInspeccionar = o; objetoAInspeccionar !== null; objetoAInspeccionar = Object.getPrototypeOf(objetoAInspeccionar)){
      resultado = resultado.concat(Object.getOwnPropertyNames(objetoAInspeccionar)) + "\n";
   }   

   //return resultado; 
   return resultado.split("\n")[0].split(",");
}
