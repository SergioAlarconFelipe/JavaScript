( function( $ ){
    var methodsPublic = {
        init: function(options) {
            console.log( 'init' );
			$( this ).data( 'prop', 'val' );
        },
        show: function( ) { 
            console.log( 'show' ); 
            return this; 
        },
        hide: function( ) { 
            console.log( 'hide' ); 
            return this; 
        },
        update1: function( content1 ) { 
            console.log( 'update' ); 
            console.log( content1 ); 
            return this; 
        },
        update2: function( content1, content2 ) { 
            console.log( 'update' ); 
            console.log( content1 ); 
            console.log( content2 ); 
            return this;
        },
        call_private: function( content1, content2 ) {
			console.log( 'call_private' );
            var f = methodsPrivate[ '_private' ];
            f.call( this, content1, content2 );
        },
        data: function( ) {
			console.log( 'data' );
            console.log( $( this ).data( 'prop' ) );
        },
    };
	
	var methodsPrivate = {
        _private: function( content1, content2 ) {
            console.log( '_private' );
            console.log( content1 ); 
            console.log( content2 ); 
            return this;
        },
	}
	
    $.fn.plugin = function(methodOrOptions) {
		if ( methodsPublic[ methodOrOptions ] ) {			
            //return methodsPublic[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
			methodsPublic[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            //return methodsPublic.init.apply( this, arguments );
			methodsPublic.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.plugin' );
        } 
		return this;
    };

    $.plugin = function(methodOrOptions) {
		var e = $( 'h2' );
        return $( e ).plugin.apply( e, arguments );
    }
	
} )( jQuery );
