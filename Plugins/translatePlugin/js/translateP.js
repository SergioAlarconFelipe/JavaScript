(function ( $ ) {
	/**
	 *	Function to translate text
	 */
	$.translate = 
		function ( opt ) {
			$( '[data-translate]' ).translate( opt );
		}
	
    $.fn.translate = 
		function ( opt ) {
			// Default opt
			/*
			if( typeof( opt ) === 'object' ) {
				if( opt.lang === undefined ) {
					opt.lang = 'en';
				}
			} else {
				if( typeof( opt ) === 'string' ) {
					optAux = opt;
					opt = {};
					opt.lang = optAux;
				} else {
					opt = {};
					opt.lang = 'en';
				}
			}
			*/
			var settings = $.extend( {
				lang: 'en'
			}, opt );
			
			element = this;			
			$.get( 'locale/' + settings.lang + '.js', function( res ) {				
				$( element ).each( function( index, element ) {
					$( element ).text( translate[ $( element ).attr( 'data-translate' ) ] );
				} );
			} );
			
			return this;
		}
		
}( jQuery ));
