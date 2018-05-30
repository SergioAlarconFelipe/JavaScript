/**
 * Function to translate text
 * 
 * @author  Sergio
 * 
 * @returns this
 */
( function( $ ) {
    $.translate =
        function( opt ) {
            $( '[data-translate]' ).translate( opt );
        };

    $.fn.translate =
        function( opt ) {
            // Default opt
            var settings = $.extend( {
                lang: 'en',
                path: 'locale',
                remove: true
            }, opt );
            
            // Funcionalidad
            element = this;
            $.get( settings.path + '/' + settings.lang + '.js', function( res ) {
                $( element ).each( function( index, element ) {
                    $( element ).text(translate[ $( element ).attr( 'data-translate' ) ] );
                    if( settings.remove ) $( element ).removeAttr( 'data-translate' );
                });
            });

            return this;
        };

}( jQuery ) );
