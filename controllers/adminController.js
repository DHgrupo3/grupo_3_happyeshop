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

    //Guarda los resultados de una creación
    save: (req,res) =>{
      let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json')) );
      //Obtiene el ultimo elemento
      let ultimoProducto = productos.pop();

      productos.push(ultimoProducto);

      let id = parseInt(ultimoProducto.id);

      let nuevoProducto = {
        id: id + 1,
        nombre: req.body.name,
        descripcion: req.body.description,
        precio: req.body.price,
        descuento: req.body.discount,
        imagen: req.file.filename
      }
      productos.push(nuevoProducto);
      let nuevoProductoGuardar = JSON.stringify(productos,null,2);
      fs.writeFileSync(path.resolve(__dirname,'../src/database/productos.json'), nuevoProductoGuardar);
      res.redirect('/admin');
    },

    //Renderiza el formulario de Edición
    edit: (req,res) => {
      res.render ('./products/edit_product')
  
    },

    //Renderiza el formulario de Borrado
    delete: (req,res) => {
        res.render ('./products/delete_product')
    
    },

    //Renderiza el formulario de Creación
    create: (req,res) => {
        
        res.render ('./products/create_product')
    }
};

module.exports = controller;