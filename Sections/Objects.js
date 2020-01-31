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

// ==========================================================================
// === Encapsulacion de objetos - INICIO ====================================
// ==========================================================================
( function( name, definition ) {
	if( window === this ) {
		this[ name ] = definition();
	} else {
		throw new Error( 'Error on initializing' );
	}
} ) ( 'sdz', function() {
	//// Constructor  - Init
	var obj = {};
	//// Constructor  - End
	
	//// Public Attributes - Init
	// 		These attributes we will be able to access using the methods or direct way.
	obj.self = null;
	obj.attr_public = 'public attribute';
	//// Public Attributes - End
	
	//// Private Attributes - Init
	// 		These attributes we will only be able to access using the methods but never in direct.
	var att_private = 'private attribute';
	//// Private Attributes - End
		
	//// Public Methods - Init
	// 		To be able to directly access these methods.
	obj.config = function( options ) {
		// Validation of configuration arguments - Init
		if( options === undefined || options === null || typeof( options ) !== 'object' ) {
			return undefined;
		}
		if( options.attr_public !== undefined ) {
			this.attr_public = options.attr_public;
		}
		// Validation of configuration arguments - End
	}
	
	obj.getSelf = function() {
		return this;
	}
	
	obj.getAttPublic = function() {
		return this.attr_public;
	}
	obj.setAttPublic = function( value ) {
		this.attr_public = value;
	}
	
	obj.getAttPrivate = function() {
		return att_private;
	}
	obj.setAttPrivate = function( value ) {
		att_private = value;
	}
	
	obj.callMethodPublic = function() {
		console.log( this.getAttPublic() );
	}
	obj.callMethodPrivate = function( value ) {
		console.log( methodPrivate.call( this, value ) );
	}
	//// Public Methods - End
	
	//// Private Methods - Init
	// 		These methods, we will not be able to directly access, they can only be calling from other methods.
	var methodPrivate = function( s ) {
		return s.toUpperCase();
	}
	//// Private Methods - End
	
	//obj.config();
	obj.self = obj;
	return obj;
} )
// ==========================================================================
// === Encapsulacion de objetos - FIN =======================================
// ==========================================================================
