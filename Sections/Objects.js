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


// ==========================================================================
// === Objetos con propiedades y metodos privados - INICIO ==================
// ==========================================================================
	// --------------------------------------------------------------------------
	// --- Forma 1 --------------------------------------------------------------
	// --------------------------------------------------------------------------
	// Devolviendo solo la parte publica
	// --------------------------------------------------------------------------
	var Barco = function( n, s ) {
		var nombre = n || null;
		var siglas = s || null;

		var getNombre = function() {
			return nombre;
		}

		var setNombre = function( n ) {
			nombre = n || null;
		}

		var getUpperName = function() {
			return nombre.toUpperCase(); // Tambien funcionaria: return getNombre().toUpperCase();
		}
		var getNombreMayus = function() {
			return getUpperName();
		}

		return {
			siglas: siglas,

			getNombre: getNombre,
			setNombre: setNombre,
			getNombreMayus: getNombreMayus,
		};
	}

	var b = new Barco( 'asdf', 'a' ); // Tambien funcionaria: var b = Barco( 'asdf', 'a' ); 
	console.log( b.getNombre() );
	b.setNombre( 'fdsa' );
	console.log( b.getNombre() );
	b.getNombreMayus();

	// --------------------------------------------------------------------------
	// --- Forma 2 --------------------------------------------------------------
	// --------------------------------------------------------------------------
	// Referencias por this
	//		es necesario ".call( this )" cuando se llamen a metodos privados, para propagar el valor de this
	// --------------------------------------------------------------------------
	var Barco = function( n, s ) {
		//this.self = this;
		var nombre = n || null;

		this.getNombre = function() {
			return nombre;
		}
		this.getNombreMayus = function() {
			return getUpperName.call( this );
		}
		this.setNombre = function( n ) {
			nombre = n || null;
		}

		var getUpperName = function() {
			return this.getNombre().toUpperCase();
		}

		//console.log( this );
		return this;
	}
	var b = new Barco( 'asdf' );
	console.log( b.getNombre() );
	console.log( b.getNombreMayus() );
// ==========================================================================
// === Objetos con propiedades y metodos privados - FIN =====================
// ==========================================================================
