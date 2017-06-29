function formatCeros (num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function uppercaseFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function remplazo ( s ) {
	busquedas = [
		{ busqueda: '<', remplazo: '$lt;' },
		{ busqueda: '>', remplazo: '$gt;' },
		{ busqueda: '&', remplazo: '&amp;' },
		{ busqueda: '"', remplazo: '&quot;' },
		{ busqueda: 's', remplazo: '&nbsp;' },
		{ busqueda: '\'', remplazo: '&apos;' },
		
		{ busqueda: 'ñ', remplazo: '&ntilde;' },
		{ busqueda: 'Ñ', remplazo: '&Ntilde;' },
		{ busqueda: 'á', remplazo: '&aacute;' },
		{ busqueda: 'é', remplazo: '&eacute;' },
		{ busqueda: 'í', remplazo: '&iacute;' },
		{ busqueda: 'ó', remplazo: '&oacute;' },
		{ busqueda: 'ú', remplazo: '&uacute;' },
		{ busqueda: 'Á', remplazo: '&Aacute;' },
		{ busqueda: 'É', remplazo: '&Eacute;' },
		{ busqueda: 'Í', remplazo: '&Iacute;' },
		{ busqueda: 'Ó', remplazo: '&Oacute;' },
		{ busqueda: 'Ú', remplazo: '&Uacute;' },
		{ busqueda: '€', remplazo: '&euro;' }
	];
	
	busquedas.forEach( function (e) {
		patron = new RegExp( "\\" + e.busqueda, "g" )
		s = s.replace( patron, e.remplazo );
	} );
	
	return s;
}
remplazo ( '<a href="pwd"><img src="pwd" /></a>' );
