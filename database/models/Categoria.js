// CREATE TABLE `categorias` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `nombre` varchar(45) NOT NULL,
//     `descripcion` varchar(45) NOT NULL,
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


// const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Categoria";

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
        }
    };

    let config = {
        tableName: "categorias",
        timestamps: false
    };

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.hasMany (models.Producto,{
            foreignKey: 'categoria_id',
            as: 'productos'
        });
    }

    return Categoria; 
}