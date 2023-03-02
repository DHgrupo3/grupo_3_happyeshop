const express = require('express');
const path = require('path');
const fs = require('fs');
const {json} = require('express');

//Conexión a Base de Datos
const db = require("../database/models");

const { validationResult } = require('express-validator');


const controller = {
    index: (req,res)=>{

      // ***BD*** Busca todos los productos en Base de Datos y los muestra

      //let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));

       db.Producto.findAll({
        include : [{association : 'estados'}, {association : 'categorias'}]
       })
       .then(function(productos){
           //return res.render ('./products/productList', {productos:productos});
           console.log(productos);
           return res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos:productos});
       } ) 

       //res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos:productos});
      // res.render ('./products/administrar');
    },

    //Guarda los resultados de una creación
    save: (req,res) =>{
      // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json')) );
      // //Obtiene el ultimo elemento
      // let ultimoProducto = productos.pop();

      // productos.push(ultimoProducto);

      // let id = parseInt(ultimoProducto.id);

      // let nuevoProducto = {
      //   id: id + 1,
      //   nombre: req.body.name,
      //   descripcion: req.body.description,
      //   imagen: req.file.filename,
      //   precio: req.body.price,
      //   categoria: req.body.category,
      // }

      // productos.push(nuevoProducto);
      // let nuevoProductoGuardar = JSON.stringify(productos,null,2);
      // fs.writeFileSync(path.resolve(__dirname,'../src/database/productos.json'), nuevoProductoGuardar);

      const resultValidation = validationResult(req);

      if (resultValidation.errors.length > 0) {

          console.log("Error Validación");
                        
          console.log("       ");
          console.log(resultValidation.mapped());

          db.Categoria.findAll()
          .then(function(categorias){
              return res.render ('./products/create_product', { errors: resultValidation.mapped(), oldData: req.body, categorias:categorias});
          })
        
      }  else if (resultValidation.errors.length == 0) {

        console.log("       ");
        console.log("No hay errores y crea el productos!");


            db.Producto.create({
              nombre: req.body.name,
              descripcion: req.body.description,
              imagen: req.file.filename,
              precio: req.body.price,
              categoria_id: req.body.category,
              estado_id: 1
            });

            db.Producto.findAll({
              include : [{association : 'estados'}, {association : 'categorias'}]
            })
            .then(function(productos){
                return res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos:productos});
            } ) 
      }

    },

    //Renderiza el formulario de Edición
    edit: (req,res) => {

      let pedidoProducto = db.Producto.findByPk(req.params.id,{
        include : [{association : 'estados'}, {association : 'categorias'}]
       });
      let pedidoCategorias = db.Categoria.findAll();
      let pedidoEstados = db.Estado.findAll();

      Promise.all([pedidoProducto, pedidoCategorias, pedidoEstados])
        .then (function([producto, categorias, estados]) {
            return res.render(path.resolve(__dirname,'../src/views/products/edit_product'), {producto:producto, categorias:categorias, estados:estados})
                 
       }) 
    },

    update: (req,res) =>{

      //let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
      //res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos});

      req.body.id = req.params.id;
      req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;

      const resultValidation = validationResult(req);

      if (resultValidation.errors.length > 0) {

          console.log("Error Validación");
                        
          console.log("       ");
          console.log(resultValidation.mapped());

          let pedidoProductos = db.Producto.findAll({include : [{association : 'estados'}, {association : 'categorias'}]});
          let categoriasC = db.Categoria.findAll();
          let estadosE = db.Estado.findAll();

          Promise.all([pedidoProductos, categoriasC, estadosE])
          .then(function([producto, categorias, estados]){

            console.log("Errores -------------------------------");
            console.log("       ");
            console.log(producto);
            console.log("     --------------------------  ");
            console.log(categorias);
            console.log("     ............................  ");
            console.log(estados);

              return res.render(path.resolve(__dirname, '../src/views/products/edit_product'), {errors: resultValidation.mapped(), oldData: req.body, producto:producto, categorias:categorias, estados:estados});
          } ) 

        
      }  else if (resultValidation.errors.length == 0) {

          console.log("       ");
          console.log("No hay errores y crea el productos!");
        
          db.Producto.update({
                  nombre: req.body.name,
                  descripcion: req.body.description,
                  imagen: req.file.filename,
                  precio: req.body.price,
                  categoria_id: req.body.category,
                  estado_id: req.body.status

              },{
                where: {
                  id: req.params.id
                }
              }
          )

      // let productoUpdate = productos.map(producto => {
      //   if(producto.id == req.body.id ){
           
      //     return producto = {
      //       id: req.body.id,
      //         nombre: req.body.name,
      //         descripcion: req.body.description,
      //         imagen: req.file.filename,
      //         precio: req.body.price,
      //         categoria: req.body.category
      //     }
      //   }
      //   return producto;
      //  })

      // let productoActualizar = JSON.stringify(productoUpdate, null, 2);
      // fs.writeFileSync(path.resolve(__dirname,'../src/database/productos.json'), productoActualizar);
      
            db.Producto.findAll({
              include : [{association : 'estados'}, {association : 'categorias'}]
            })
            .then(function(productos){
                return res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos:productos});
            } ) 

      }
    },

    //Renderiza el formulario de Borrado
    delete: (req,res) => {

      // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
      // //  res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos});
      // const productoDeleteId = req.params.id;
      // const productosFinal = productos.filter(producto => producto.id != productoDeleteId);
      // let productosGuardar = JSON.stringify(productosFinal, null,2);
      // fs.writeFileSync(path.resolve(__dirname,'../src/database/productos.json'), productosGuardar);

      db.Producto.update({
        estado_id: 2
      },{
      where: {
        id: req.params.id
      }
      })

      db.Producto.findAll({
        include : [{association : 'estados'}, {association : 'categorias'}]
       })
      .then(function(productos){
          return res.render(path.resolve(__dirname, '../src/views/products/administrar'), {productos:productos});
      } ) 

    },

    //Renderiza el formulario de Creación
    create: (req,res) => {
      
      // ***BD*** Busca todas las categorias en Base de Datos y las muestra
        db.Categoria.findAll()
        .then(function(categorias){
            return res.render ('./products/create_product', {categorias:categorias});
        } ) 
        
    },

    mostrar: (req,res) =>{

    // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
    // let miProducto;
    // productos.forEach(producto => {
    //     if(producto.id == req.params.id){
    //         miProducto = producto;
    //     }
    // });

    // ***BD*** Busca todos los productos en Base de Datos y los muestra
    db.Producto.findByPk(req.params.id, {
       include : [{association : 'estados'}, {association : 'categorias'}]
     })
     .then(function(miProducto){
            console.log (miProducto);
             return res.render(path.resolve(__dirname,'../src/views/products/productDetail'), {miProducto})
     } ) 

    
},
mostrarGeneral: (req,res) =>{

  // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/database/productos.json' )));
  // let miProducto;
  // productos.forEach(producto => {
  //     if(producto.id == req.params.id){
  //         miProducto = producto;
  //     }
  // });

  // ***BD*** Busca todos los productos en Base de Datos y los muestra
  db.Producto.findByPk(req.params.id, {
     include : [{association : 'estados'}, {association : 'categorias'}]
   })
   .then(function(miProducto){
          console.log (miProducto);
           return res.render(path.resolve(__dirname,'../src/views/products/productDetailGeneral'), {miProducto})
   } ) 

  
}
}


module.exports = controller;