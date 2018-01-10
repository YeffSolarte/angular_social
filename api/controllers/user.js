'use strict';

var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

function home(req, res) {
	res.status(200).send({message : 'HOLA MUNDOOOOOO :D '});
}

function pruebas(req, res){
	res.status(200).send({message : 'Accion de pruebeas'});
}

function saveUser(req, res){
	var params = req.body;
	var user = new User();
	if(params.name && params.surname && params.email && params.password && params.nick){
		user.name = params.name;
		user.surname = params.surname;
		user.email = params.email;
		user.nick = params.nick;
		user.role = 'ROLE_USER';
		user.image = null;
		User.find(
			{
				$or : [
					{email : params.email.toLowerCase()},
					{nick : params.nick.toLowerCase()}
				]
			}
		).exec((err, users) => {
			if(err) return res.status(500).send({message : 'Error en la peticion de usuarios'});
			if(users && users.length){
				return res.status(400).send({message : 'El usuario ya existe.'});
			}
		});
		bcrypt.hash(params.password, null, null, (err, hash) => {
			user.password = hash;
			user.save((err, userStored) => {
				if(err) return res.status(500).send({message : 'Error al guardar el usuario'});
				if(userStored){
					res.status(200).send({user : userStored});
				} else {
					res.status(404).send({message : 'No se ha registrado el usuario'});
				}
			});
		});
	} else {
		res.status(400).send({
			message : 'Envia todos los campos necesarios'
		});
	}
}

module.exports = {
	home,
	pruebas,
	saveUser
};