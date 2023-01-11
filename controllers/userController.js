const express = require('express');
const path = require('path');
const fs = require('fs');
const {json} = require('express');

const controller = {
    
    register: (req,res) => {
        res.render ('./users/register')
    },

    login: (req,res) => {
        res.render ('./users/login')
    },

    contact: (req,res) => {
        res.render ('./users/contactanos')
    },
    terminos: (req,res) => {
        res.render ('./terminos')
    },
    //Guarda los resultados de una creación
    save: (req,res)=>{
        const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		return res.send('Ok, las validaciones se pasaron y no tienes errores');
	},

}

module.exports = controller;
