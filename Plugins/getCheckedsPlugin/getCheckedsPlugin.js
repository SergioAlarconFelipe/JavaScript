( function( $ ){
    $.fn.getCheckeds = function() {
        return this.filter(
			function( id, element ) {
				if( $( element ).is(':checkbox') ) {
					return $( element ).is(':checked');
				}
			}
		)
    };
    
} )( jQuery );

// Use example
$( 'input[type="checkbox"]' ).getCheckeds();
