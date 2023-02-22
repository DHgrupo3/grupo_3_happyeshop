
const express = require('express');
const path = require('path');
const fs = require('fs');
const {json} = require('express');
const bcryptjs= require('bcryptjs');
//const { all } = require('../routes/users');

const { validationResult } = require('express-validator');

const User = require('../src/models/user.js');
const { log } = require('console');

//Conexión a Base de Datos
const db = require("../database/models");

const controller = {
    
    register: (req,res) => {
        db.Pais.findAll()
        .then(function(pais){
            return res.render ('./users/register', {pais:pais});
        } ) 
    },

    login: (req,res) => {
        res.render ('./users/login');
       },

    validar: (req,res) => {
        
        let userToLogin = User.findByField('email', req.body.email);
        
        if (userToLogin){
        let passwordCheck = bcryptjs.compareSync(req.body.password, userToLogin.password)
        
            if (passwordCheck) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember){
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) *2 })
                }


                return res.redirect ('/user/userProfile')
            };

            return res.render ('./users/login', {
                errors:{
                    email:{
                        msg: 'las credenciales son invalidas'
                    }
                }
            });
        }

        //console.log(userToLogin);//
        
        return res.render ('./users/login', {
            errors:{
                email:{
                    msg: 'El email no corresponde a un usuario registrado'
                }
            }
        });
   
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
//evito que el mail ya este registrado//

        let userInDb = User.findByField('email', req.body.email);
        
        if (userInDb) {
			return res.render('./users/register', {
				errors:{
                    email:{
                        msg: 'este email ya esta registrado'
                    }
                } ,
				oldData: req.body
			});
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            imagen: req.file.filename
        }

        let userCreated = User.create(userToCreate);

		// //return res.send('Ok, las validaciones se pasaron y no tienes errores');
        return res.render ('./users/login');
	},

    profile: (req, res) => {
        
        return res.render ('./users/userProfile', {
        user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect ('/');
    }

}

module.exports = controller;
