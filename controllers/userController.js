
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
    
    index: (req,res)=>{

        // ***BD*** Busca todos los productos en Base de Datos y los muestra
        db.Usuario.findAll({
            include : [{association : 'estadosusuario'}, {association : 'pais'}]
           })
         .then(function(usuarios){
             return res.render(path.resolve(__dirname, '../src/views/users/administrar'), {usuarios:usuarios});
         } ) 

      },

    register: (req,res) => {
        db.Pais.findAll()
        .then(function(pais){
            return res.render ('./users/register', {pais:pais});
        } ) 
    },

    registerAdmin: (req,res) => {
        db.Pais.findAll()
        .then(function(pais){
            return res.render ('./users/registerAdmin', {pais:pais});
        } ) 
    },

    login: (req,res) => {
        res.render ('./users/login');
       },

    validar: (req,res) => {
        
        db.Usuario.findOne({ 
            where: {
                email: req.body.email
            }}).then (function(userToLogin) {

                if (userToLogin.estado_id == 1) {

                console.log ("Ingresa a Validar");

                let passwordCheck = bcryptjs.compareSync(req.body.password, userToLogin.password)

                console.log ("                                                  ");
                console.log ("****************   Password Check ****************");
                console.log ("                                                  ");
                console.log ("Password Check from BODY -->   " + req.body.password);
                console.log ("                                                  ");
                console.log ("Password Check from DATABASE -->   " + userToLogin.password);
                console.log ("                                                  ");
                console.log ("Password Check -->   " + passwordCheck);
                console.log ("                                                  ");
                console.log ("**************************************************");
                console.log ("                                                  ");
        
                if (passwordCheck) {
                    
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;

                    if (req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) *2 })
                    }
                
                    return res.redirect ('/user/userProfile')
                };

                return res.render ('./users/login', {
                    errors:{
                        email:{
                            msg: 'las credenciales son invalidas'
                    }}
                });

                   } //UserToLogin
        
        })

        // xxxxxx  Validación con JSON xxxxxxxx  
            // let userToLogin = User.findByField('email', req.body.email);
            
            // if (userToLogin){
                
            //     let passwordCheck = bcryptjs.compareSync(req.body.password, userToLogin.password)
            
            //     if (passwordCheck) {
            //         delete userToLogin.password;
            //         req.session.userLogged = userToLogin;

            //         if(req.body.remember){
            //             res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) *2 })
            //         }


            //         return res.redirect ('/user/userProfile')
            //     };

            //     return res.render ('./users/login', {
            //         errors:{
            //             email:{
            //                 msg: 'las credenciales son invalidas'
            //             }
            //         }
            //     });
            // }

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

        //         //Reviso que es lo que recibo
        //         console.log(req.body, req.file);

                
        //         const resultValidation = validationResult(req);

        //         if (resultValidation.errors.length > 0) {
        // 			return res.render('./users/register', {
        // 				errors: resultValidation.mapped(),
        // 				oldData: req.body
        // 			});
        // 		}
        // //evito que el mail ya este registrado//

        //         let userInDb = User.findByField('email', req.body.email);
                
        //         if (userInDb) {
        // 			return res.render('./users/register', {
        // 				errors:{
        //                     email:{
        //                         msg: 'este email ya esta registrado'
        //                     }
        //                 } ,
        // 				oldData: req.body
        // 			});
        //         }

        //         let userToCreate = {
        //             ...req.body,
        //             password: bcryptjs.hashSync(req.body.password, 10),
        //             imagen: req.file.filename
        //         }

        //         let userCreated = User.create(userToCreate);

        //Reviso que es lo que recibo
        console.log(req.body, req.file);
                    
                    
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            db.Pais.findAll()
            .then(function(pais){
                    return res.render('./users/register', {
                        errors: resultValidation.mapped(),
                        oldData: req.body
                        }, 
                        {pais:pais});
        })}

        //evito que el mail ya este registrado//

        db.Usuario.findOne({ 
            where: {
                email: req.body.email
            }}).then (function(userInDb) {

                if (userInDb) {

                    db.Pais.findAll()
                        .then(function(pais){
                            return res.render('./users/register', {
                                errors:{
                                    email:{
                                    msg: 'este email ya esta registrado'
                                }
                        } , 
                        oldData: req.body
                    }, {pais:pais});
                    
            })}})

        let userToCreate = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            pais_id: req.body.pais,
            imagen: req.file.filename,
            estado_id: 1
        }

        //res.send(userToCreate);

        db.Usuario.create(userToCreate);

		// //return res.send('Ok, las validaciones se pasaron y no tienes errores');
        return res.render ('./users/login');
	},

        //Guarda los resultados de una creación
        saveAdmin: (req,res)=>{

            //Reviso que es lo que recibo
            console.log(req.body, req.file);
              
            
            const resultValidation = validationResult(req);
    
            if (resultValidation.errors.length > 0) {
                db.Pais.findAll()
                   .then(function(pais){
                        return res.render('./users/registerAdmin', {
                            errors: resultValidation.mapped(),
                            oldData: req.body
                            }, 
                            {pais:pais});
            })}

            //evito que el mail ya este registrado//
    
            db.Usuario.findOne({ 
                where: {
                    email: req.body.email
                }}).then (function(userInDb) {

                    if (userInDb) {

                        db.Pais.findAll()
                            .then(function(pais){
                                return res.render('./users/registerAdmin', {
                                    errors:{
                                        email:{
                                        msg: 'este email ya esta registrado'
                                    }
                            } , 
                            oldData: req.body
                        }, {pais:pais});
                        
                })}})
    
            let userToCreate = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                pais_id: req.body.pais,
                imagen: req.file.filename,
                estado_id: 1
            }
    
            //res.send(userToCreate);

            db.Usuario.create(userToCreate);
    
            // ***BD*** Busca todos los productos en Base de Datos y los muestra
             db.Usuario.findAll({
                include : [{association : 'estadosusuario'}, {association : 'pais'}]
               })
                 .then(function(usuarios){
                     return res.render(path.resolve(__dirname, '../src/views/users/administrar'), {usuarios:usuarios});
                 } ) 
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
    },
     //Renderiza el formulario de Borrado
     delete: (req,res) => {

        db.Usuario.update({
          estado_id: 2
        },{
        where: {
          id: req.params.id
        }
        })
  
        // ***BD*** Busca todos los usuarios en Base de Datos y los muestra
        db.Usuario.findAll({
            include : [{association : 'estadosusuario'}, {association : 'pais'}]
           })
        .then(function(usuarios){
            return res.render(path.resolve(__dirname, '../src/views/users/administrar'), {usuarios:usuarios});
        } ) 
  
      },

    mostrar: (req,res) =>{

        db.Usuario.findByPk(req.params.id,
            {
                include : [{association : 'estadosusuario'}, {association : 'pais'}]
               })
         .then(function(user){
                 return res.render(path.resolve(__dirname,'../src/views/users/userDetail'), {user:user})
         } ) 
 
    },

    //Renderiza el formulario de Edición
    edit: (req,res) => {

        let pedidoUsuario = db.Usuario.findByPk(req.params.id,{
            include : [{association : 'estadosusuario'}, {association : 'pais'}]
           });
        let pedidoPais = db.Pais.findAll();
        let pedidoEstados = db.EstadoUsuario.findAll();
  
        Promise.all([pedidoUsuario, pedidoPais, pedidoEstados])
          .then (function([usuario, pais, estados]) {
              return res.render(path.resolve(__dirname,'../src/views/users/edit_user'), {usuario:usuario, pais:pais, estados:estados})
                   
         }) 
      },
  
    update: (req,res) =>{

        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        
        db.Usuario.update({
                nombre: req.body.name,
                apellido: req.body.surname,
                imagen: req.file.filename,
                email: req.body.email,
                password: req.body.password,
                estado_id: req.body.status
  
            },{
              where: {
                id: req.params.id
              }
            }
        )
  
            // ***BD*** Busca todos los productos en Base de Datos y los muestra
            db.Usuario.findAll({
                include : [{association : 'estadosusuario'}, {association : 'pais'}]
               })
            .then(function(usuarios){
                return res.render(path.resolve(__dirname, '../src/views/users/administrar'), {usuarios:usuarios});
            } ) 

      },

}

module.exports = controller;
