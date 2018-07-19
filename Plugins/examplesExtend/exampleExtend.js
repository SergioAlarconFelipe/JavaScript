// custom selector:
jQuery.extend( 
	jQuery.expr[':'], 
	{
		  icon: function(el) {
				var c = el.className.toLowerCase(); 
				return c.match("icon")
		  }
} );