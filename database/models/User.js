const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Users";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },

        apellido: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING
        },

        contrasena: {
            type: dataTypes.STRING
        },

        categoria: {
            type: dataTypes.STRING
        },

        imagen: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario; 
}