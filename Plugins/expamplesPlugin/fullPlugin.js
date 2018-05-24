( function( $ ){
    "use strict";

    var methods = {
        init: function(options) {
            console.log('init');
            $( this ).data( 'prop', 'val' );
        },
        show: function( ) { 
            console.log('show'); 
            return this; 
        },
        hide: function( ) { 
            console.log('hide'); 
            return this; 
        },
        update1: function( content ) { 
            console.log('update'); 
            console.log(content); 
            return this; 
        },
        update2: function( content1, content2 ) { 
            console.log('update'); 
            console.log(content1); 
            console.log(content2); 
            return this;
        },
        call_private: function( content ) {
            f = methods['_private'];
            f.call( this, content );
        },
        _private: function( content ) {
            console.log('private');
            console.log(content); 
            return this;
        },
        data: function( ) {
            console.log( $( this ).data( 'prop' ) );
        }
    };

    $.fn.plugin = function(methodOrOptions) {

        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.plugin' );
        }    
    };

    $.plugin = function(methodOrOptions) {
        $( 'h1' ).plugin(methodOrOptions);

    }

} )( jQuery );
