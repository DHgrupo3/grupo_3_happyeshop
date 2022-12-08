const path = require('path');
const fs = require('fs');
const { json } = require('express');

const controller = {
    index: (req,res) => {
        res.render ('./products/productList')
    
    },

    detail: (req,res) => {
        res.render ('./products/productDetail')
    
    },

    edit: (req,res) => {
        res.render ('./products/edit_product')
    
    },

    delete: (req,res) => {
        res.render ('./products/delete_product')
    
    },

    create: (req,res) => {
        
        res.render ('./products/create_product')
    }

    
       
}

module.exports = controller;
