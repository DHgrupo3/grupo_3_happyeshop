const express = require('express');
const path = require('path');
const fs = require('fs');
const {json} = require('express');

const controller = {
    index: (req,res)=>{
       let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
       res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos});
      // res.render ('./products/administrar');
    },

 
    newProduct: (req,res) => {
      //res.send("Grabo Datos");
      
      //Leer el JSON y transformar a objeto literal
      let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')) );
      //save 
      res.render(path.resolve(__dirname, '../src/views/products/create_product'),{productos} );

    }

};

module.exports = controller;