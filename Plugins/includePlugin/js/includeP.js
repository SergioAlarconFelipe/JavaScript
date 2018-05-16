(function ( $ ) {
	/**
	 *	Function that load all the tags include
	 *	
	 *	@param opt 	Object with this optional properties
	 *		<ul>
	 *			<li>tag: Indicate the name of tag to find --> Default: 'include'</li>
	 *			<li>callback_success: Indicate a callback to exec at the end of load all tags</li>
	 *			<li>callback_args: Indicate the arguments to callback_success</li>
	 *		</ul>
	 *	
	 *	Example:
	 *		<include variables='"$a":"v1","$b":"v2"'>head</include>
	 */
	 
	//	ToDo permitir callback con parametros ==> No he visto necesidad aun
	//	ToDo bucle para variables infinitas ==> Funcionando
	//	ToDo permitir recursividad
    $.fn.loadComponent = 
		function ( opt ) {
			// Default opt
			/*
			if( typeof( opt ) === 'undefined' ) {
				opt = {};
			}
			*/
			
			var settings = $.extend( {
				tag: 'include',
				callback_success: '',
				callback_args: '' 
			}, opt );
			
			// Funcionalidad
			cantIncludes = $( this ).length;
			
			$( this ).each( function ( index, base ) {						
				$.get( 'components/' + $( this ).text() + '.html', function( res ) {
					// Interpretacion de variables (si existen)
					//formato para el attributo variables = '"$a":1,"$b":2'
					if( $( base ).attr( 'variables' ) !== undefined ) {
						variables = JSON.parse( '{' + $( base ).attr( 'variables' ) + '}' );
						
						//Object.keys( variables ).length;
						$.each( variables, function( index, value ) {					
							//key = new RegExp( '\\' + index, 'g' );
							key = new RegExp( '\\' + index + '\\b', 'g' );
							//console.log( key );
							res = res.replace( key, value );
						} );				
					}
					
					// Reemplazo de la plantilla en el codigo
					$( base ).replaceWith( res );
					
					// Ejecucion del callback (si existe)
					/*
					if( $( base ).attr( 'data-callback' ) !== undefined ) {
						window[ $( base ).attr( 'data-callback' ) ]();
					}
					*/
					
					// Ejecucion del callback final tras la carga de todos los includes
					cantIncludes --;
					if( cantIncludes === 0 ) {
						if( settings.callback_success !== undefined ) {
							if( settings.callback_args !== undefined ) {
								settings.callback_success( settings.callback_args );
							} else {
								settings.callback_success( );
							}
							
						}
					}
					
				} );
			} );
			
			return this;
		}
 
}( jQuery ));
