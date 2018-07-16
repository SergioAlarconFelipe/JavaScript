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
	$.fn.regex = function( pattern = null, attr = undefined, target = $.fn.attr ){
		// Validation
		if( pattern === null ) return this;
		if( attr === 'content' ) attr = undefined;
		if( attr === undefined ) target = undefined;
		if( attr !== undefined && attr !== 'content' ) attr = [attr];
		target = target || $.fn.text;
		
		// Filter by regex
		return this.filter( function() {
			return pattern.test( target.apply( $( this ), attr ) );
		} );
	};
} )( jQuery );
