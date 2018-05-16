/**
 *	Function that load all tags include
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
function loadComponent( opt ) {
	// Default opt
	if( typeof( opt ) === undefined ) {
		opt = {};
	}
	if( opt.tag === undefined ) {
		opt.tag = 'include';
	}
	
	// Funcionalidad
    cantIncludes = $( opt.tag ).length;
	
    $( opt.tag ).each( function ( index, base ) {
	
        $.get( 'components/' + $( this ).text() + '.html', function( res ) {
            // Interpretacion de variables (si existen)
			//formato para el attributo variables = '"$a":1,"$b":2'
			if( $( base ).attr( 'variables' ) !== undefined ) {
				variables = JSON.parse( '{' + $( base ).attr( 'variables' ) + '}' );
				
				//Object.keys( variables ).length;
				$.each( variables, function( index, value ) {					
					key = new RegExp( '\\' + index, 'g' );
					
					res = res.replace( key, value );
				} );				
            }
			
			// Reemplazo de la plantilla en el codigo
            $( base ).replaceWith( res );
			
            // Ejecucion del callback (si existe)
            if( $( base ).attr( 'data-callback' ) !== undefined ) {
                window[ $( base ).attr( 'data-callback' ) ]();
            }
            
            // Ejecucion del callback final tras la carga de todos los includes
            cantIncludes --;
            if( cantIncludes === 0 ) {
				if( opt.callback_success !== undefined ) {
					if( opt.callback_args !== undefined ) {
						opt.callback_success( opt.callback_args );
					} else {
						opt.callback_success( );
					}
					
				}
            }
			
        } );
    } );
}