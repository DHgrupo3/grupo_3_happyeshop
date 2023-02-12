const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        categoria: {
            type: dataTypes.STRING,
            foreignKey: true
        },

        codigo: {
            type: dataTypes.STRING
        },

        nombre: {
            type: dataTypes.STRING
        },

        descripcion: {
            type: dataTypes.STRING
        },

        imagen: {
            type: dataTypes.STRING
        },

        precio: {
            type: dataTypes.
        },

        stock: {
            type: dataTypes.INTEGER
        }

    };

    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    return Producto; 
}