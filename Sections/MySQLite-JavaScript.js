// Activar BDD
var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);

// Insertar datos
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS foo (id unique, text)');
  tx.executeSql('INSERT INTO foo (id, text) VALUES (1, "bar")');
  tx.executeSql('insert into foo (id, text) values (?, ?)', [2, "synergies"]);
});

// Select datos
db.transaction(function (tx) {
	tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
	  var len = results.rows.length, i;
	  for (i = 0; i < len; i++) {
		console.log (results.rows.item(i).text);
	  }
	});
});

// Get nombre de tablas de nuestra bdd
db.transaction(function (tx) {
	tx.executeSql("SELECT * FROM sqlite_master where type='table'", [], function (tx, results) {
	  var len = results.rows.length, i;
	  for (i = 0; i < len; i++) {
		console.log(results.rows.item(i).tbl_name);
	  }
	});
});

// Get nombre de campos de nuestra tablas - Funcion
db.transaction(function (tx) {
	tx.executeSql("SELECT sql FROM sqlite_master where name = 'foo';", [], function (tx, results) {  
		var cad = results.rows.item(0).sql;
		
		cad = cad.split("(")[1];
		cad = cad.substr(0, cad.length -1);
		cad = cad.split(", ");

		var array = [];
		for (var i = 0; i < cad.length; i++) {
			array.push( cad[i].split(" ")[0] );
		}
		
		console.log (array);
	});
});

// Get nombre de campos de nuestra tablas - RegEx
db.transaction(function (tx) {
	tx.executeSql("SELECT sql FROM sqlite_master where name = 'foo';", [], function (tx, results) {  
		var cad = results.rows.item(0).sql;

		cad = cad.match(/\(((\w+){1}(\ \w+)*(\,\ )*)+\)/g)[0];
		cad = cad.match(/^\(\w+|\,\ \w+/g)
		
		cad.forEach( function (element, index, array) { 
			array[index] = array[index].replace( /\(|\,\ /g, function () { return ""; } );
		} )

		console.log (cad);
	});
});

// Get nombre de campos de nuestra tablas - RegEx 2
function exec (table, callback) {
	db.transaction(function (tx) {
		tx.executeSql("SELECT sql FROM sqlite_master where name = ?;", [table], function (tx, results) {  
			var cad = results.rows.item(0).sql;

			var array = [];
			cad.replace(/(?:\(\s*|\,\s*)(\w+)/g, function (match, column) {
				array.push(column);
				return "";
			});

			callback (array);
		});
	});	
}
function exito (array) {
	console.log (array);
}
exec ("foo", exito);

















































============================ Pruebas bucles ============================

function a () {
	array = [1, 2, 3, 4, 5];
	cont = 10000;
	console.time("prueba1");
	
	while (cont > 0) {
		prueba1 ();
		cont--;
	}
	
	console.timeEnd("prueba1");
}

function prueba1 () {
	for (var i = 0; i < array.length; i++) {
		array[i]++;
	}
}

function b () {
	array = [1, 2, 3, 4, 5];
	console.time("prueba2");
	cont = 10000;
	
	while (cont > 0) {
		prueba2 ();
		cont--;
	}	
	
	console.timeEnd("prueba2");
}

function prueba2 () {
	array.forEach( function (element, index, arrayAux) {
		arrayAux[index]++;
	} );
}

















============================ Pruebas accesos a bdd ============================


function a () {
	cont = 1000;
	console.time("prueba1");
	
	while (cont > 0) {
		db.transaction(function (tx) {
			tx.executeSql("SELECT sql FROM sqlite_master where name = 'foo';", [], function (tx, results) {  
				var cad = results.rows.item(0).sql;
				
				cad = cad.split("(")[1];
				cad = cad.substr(0, cad.length -1);
				cad = cad.split(", ");

				var array = [];
				for (var i = 0; i < cad.length; i++) {
					array.push( cad[i].split(" ")[0] );
				}
				
				//console.log (array);
			});
		});
		cont--;
	}
	
	console.timeEnd("prueba1");
}

function b () {
	console.time("prueba2");
	cont = 1000;
	
	while (cont > 0) {
		db.transaction(function (tx) {
			tx.executeSql("SELECT sql FROM sqlite_master where name = 'foo';", [], function (tx, results) {  
				var cad = results.rows.item(0).sql;

				cad = cad.match(/\(((\w+){1}(\ \w+)*(\,\ )*)+\)/g)[0];
				cad = cad.match(/^\(\w+|\,\ \w+/g)
				
				cad.forEach( function (element, index, array) { 
					array[index] = array[index].replace( /\(|\,\ /g, function () { return ""; } );
				} )

				//console.log (cad);
			});
		});
		cont--;
	}	
	
	console.timeEnd("prueba2");
}
