const path = require('path');
const fs = require('fs');
const { json } = require('express');

//Conexión a Base de Datos
const db = require("../database/models");

const controller = {
    //Método que lista los productos para el usuario final
    index: (req,res) => {
        res.render ('./products/productList')
    
    },

    //Método que lista el producto seleccionado para el usuario final
    detail: (req,res) => {
        
       // db.Productos.findAll();

        res.render ('./products/productDetail')
    
    },

}

module.exports = controller;
