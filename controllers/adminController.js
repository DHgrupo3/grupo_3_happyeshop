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

 
    //newProduct: (req,res) => {
      //res.send("Grabo Datos");
      
      //Leer el JSON y transformar a objeto literal
      //let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')) );
      //save 
      //res.render(path.resolve(__dirname, '../src/views/products/create_product'),{productos} );

   // },

    save: (req,res) =>{
      let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json')) );
      let ultimoProducto = productos.pop();
      productos.push(ultimoProducto);
      let nuevoProducto = {
        id: ultimoProducto.id +1,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        descuento: req.body.descuento,
        imagen: req.body.filename
      }
      productos.push(nuevoProducto);
      let nuevoProductoGuardar = JSON.stringify(productos,null,2);
      fs.writeFileSync(path.resolve(__dirname,'../src/database/productos.json'), nuevoProductoGuardar);
      res.redirect('/admin');
    }
};

module.exports = controller;