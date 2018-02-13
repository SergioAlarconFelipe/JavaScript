Array.prototype.getItemByIndex = function( i ) {
  me = this;
	return me[i];
}

a = [ '11', '22', '33' ];
a.getItemByIndex( 1 );
