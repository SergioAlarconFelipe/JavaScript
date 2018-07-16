/**		
 *	JQuery Selectors Regex
 *	
 *	Example of use:
 *		1. Find with attrs
 *		$( 'div' )
 *			.regex( /i\d+/, 'id' )
 *			.regex( /i\d+/, 'class' );
 *	
 *		2. Find with content
 *		$( 'div' )
 *			.regex( /ex/ );
 *		$( 'div' )
 *			.regex( /ex/, 'content' );
 *	
 *		3. Don't filter
 *		$( 'div' )
 *			.regex( );
 *		
*/
( function( $ ){
	$.fn.regex = function( pattern = null, attr = undefined ){
		// Validation
		var target;
		if( pattern === null ) return this;
		if( attr === 'content' || attr === undefined ) {
			attr = undefined; 
			target = $.fn.text;
		} else {
			target = $.fn.attr;
			if( attr !== undefined ) attr = [attr];	
		}
		
		// Filter by regex
		return this.filter( function() {
			return pattern.test( target.apply( $( this ), attr ) );
		} );
	};
} )( jQuery );
