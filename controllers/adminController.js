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
        imagen: req.file.filename,
        precio: req.body.price,
        categoria: req.body.category,
      }

      productos.push(nuevoProducto);
      let nuevoProductoGuardar = JSON.stringify(productos,null,2);
      fs.writeFileSync(path.resolve(__dirname,'../src/database/productos.json'), nuevoProductoGuardar);
      res.redirect('/admin');
    },

    //Renderiza el formulario de Edición
    edit: (req,res) => {

      let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
      // res.render(path.resolve(dirname, '../src/views/products/administrar'), {productos});
      const productoId = req.params.id;
      let productoEditar = productos.find(producto=> producto.id == productoId);

      res.render(path.resolve(__dirname,'../src/views/products/edit_product'), {productoEditar});
    },

    update: (req,res) =>{

      let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
      //res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos});

      req.body.id = req.params.id;
      req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
      let productoUpdate = productos.map(producto => {
        if(producto.id == req.body.id ){
           
          return producto = {
            id: req.body.id,
              nombre: req.body.name,
              descripcion: req.body.description,
              imagen: req.file.filename,
              precio: req.body.price,
              categoria: req.body.category
          }
        }
        return producto;
       })

      let productoActualizar = JSON.stringify(productoUpdate, null, 2);
      fs.writeFileSync(path.resolve(__dirname,'../src/database/productos.json'), productoActualizar);
      res.redirect('/admin');
    },

    //Renderiza el formulario de Borrado
    delete: (req,res) => {

      let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
      //  res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos});
      const productoDeleteId = req.params.id;
      const productosFinal = productos.filter(producto => producto.id != productoDeleteId);
      let productosGuardar = JSON.stringify(productosFinal, null,2);
      fs.writeFileSync(path.resolve(__dirname,'../src/database/productos.json'), productosGuardar);

      res.redirect('/admin');

    },

    //Renderiza el formulario de Creación
    create: (req,res) => {

        res.render ('./products/create_product')
    },
mostrar: (req,res) =>{
  let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
  let miProducto;
  productos.forEach(producto => {
      if(producto.id == req.params.id){
          miProducto = producto;
      }
  });
  res.render(path.resolve(__dirname,'../src/views/products/productDetail'), {miProducto})
},
}


module.exports = controller;