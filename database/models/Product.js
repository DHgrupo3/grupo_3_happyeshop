const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            type: dataTypes.STRING
        },

        categoria: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    return Producto; 
}