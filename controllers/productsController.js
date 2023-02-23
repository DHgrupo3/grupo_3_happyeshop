const path = require('path');
const fs = require('fs');
const { json } = require('express');

//Conexión a Base de Datos
const db = require("../database/models");

const controller = {
    //Método que lista los productos para el usuario final
    index: (req,res) => {

        db.Producto.findAll({
            include : [{association : 'estados'}, {association : 'categorias'}]
           })
            .then(function(productos){
                return res.render ('./products/productList', {productos:productos});
            } ) 
  
    },

    //Método que lista el producto seleccionado para el usuario final
    detail: (req,res) => {

    db.Producto.findByPk(req.params.id, {
        include : [{association : 'estados'}, {association : 'categorias'}]
      })
      .then(function(miProducto){
             console.log (miProducto);
              return res.render(path.resolve(__dirname,'./products/productDetail'), {miProducto})
      } ) 

    },

}

module.exports = controller;
