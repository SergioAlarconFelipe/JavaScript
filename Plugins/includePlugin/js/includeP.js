/**
 * Function that load all the tags include
 * 
 * @author  Sergio
 * 
 * @param   Object    Object with this optional properties
 *      <ul>
 *          <li>tag: Indicate the name of tag to find --> Default: 'include'</li>
 *          <li>callback_success: Indicate a callback to exec at the end of load all tags</li>
 *          <li>callback_args: Indicate the arguments to callback_success</li>
 *      </ul>
 * 
 * @returns this
 * 
 * Example:
 *      <include variables='"$a":"v1","$b":"v2"' src="general">head</include>
 */
( function( $ ) {
    $.loadComponents = function( opt ) {
        var e =  $( 'include' );
        $( e ).loadComponents( opt );
        return e;
    };
    
    $.fn.loadComponents =
        function( opt ) {
            // Default opt
            var settings = $.extend({
                tag: 'include',
                callback_success: '',
                callback_args: ''
            }, opt);

            // Funcionalidad
            var cantIncludes = $( this ).length;

            $( this ).each( function( index, base ) {
                var src = $(this).attr( 'src' ) !== undefined ? $( this ).attr( 'src' ) + '/' : '';
                
                $.get('components/' + src + $(this).text() + '.html', function (res) {
                    // Interpretacion de variables (si existen)
                    //formato para el attributo variables = '"$a":1,"$b":2'
                    if( $( base ).attr( 'variables' ) !== undefined ) {
                        var variables = JSON.parse( '{' + $( base ).attr( 'variables' ) + '}' );

                        //Object.keys( variables ).length;
                        $.each( variables, function ( index, value ) {
                            //key = new RegExp( '\\' + index, 'g' );
                            var key = new RegExp( '\\' + index + '\\b', 'g' );
                            //console.log( key );
                            res = res.replace( key, value );
                        } );
                    }

                    // Reemplazo de la plantilla en el codigo
                    $(base).replaceWith( res );

                    // Ejecucion del callback (si existe)
                    // if( $( base ).attr( 'callback' ) !== undefined ) {
                    // window[ $( base ).attr( 'callback' ) ]();
                    // }
                    
                    // Ejecucion del callback final tras la carga de todos los includes
                    cantIncludes--;
                    if( cantIncludes === 0 ) {
                        if( settings.callback_success !== '' ) {
                            if( settings.callback_args !== '' ) {
                                settings.callback_success( settings.callback_args );
                            } else {
                                settings.callback_success( );
                            }

                        }
                    }

                } );
            } );

            return this;
        };
}( jQuery ));
