'use strict';

let mongoose = require('mongoose');
let app = require('./app');
let port = 3800;

//conection Db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social', {useMongoClient : true}).then(() => {
	console.log("La conexion a la base de datos se realizo bien");
	//create server
	app.listen(port, () => {
		console.log("Servidor en linea en http://localhost:3800");
	})
	
}).catch(reason => {
	console.log(reason);
});
