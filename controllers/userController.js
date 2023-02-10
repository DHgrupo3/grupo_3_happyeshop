
const express = require('express');
const path = require('path');
const fs = require('fs');
const {json} = require('express');
//const { all } = require('../routes/users');

const { validationResult } = require('express-validator');

const User = require('../src/models/user.js');

const controller = {
    
    register: (req,res) => {
        res.render ('./users/register')
    },

    login: (req,res) => {
        res.render ('./users/login');
    },

    validar: (req,res) => {

        let userToLogin = User.findByField('email', req.body.email);

        console.log(userToLogin);
        
        return res.send ("Validando..." + req.body.email);
   
    },

    contact: (req,res) => {
        res.render ('./users/contactanos')
    },
    terminos: (req,res) => {
        res.render ('./terminos')
    },

    //Guarda los resultados de una creación
    save: (req,res)=>{

        //Reviso que es lo que recibo
        console.log(req.body, req.file);

        
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
			return res.render('./users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

        let userToCreate = {
            ...req.body,
            imagen: req.file.filename
        }

        User.create(userToCreate);

		// //return res.send('Ok, las validaciones se pasaron y no tienes errores');
        return res.render ('./users/login');
	},

}

module.exports = controller;
