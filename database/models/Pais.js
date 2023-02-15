// CREATE TABLE `pais` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `nombre` varchar(45) NOT NULL,
//     `descripcion` varchar(45) NOT NULL,
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Pais";

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
        tableName: "pais",
        timestamps: false
    };

    const Pais = sequelize.define(alias, cols, config);

    Pais.associate = function(models) {
        Pais.hasMany(models.Usuario,{
            as: 'usuarios',
            foreignKey: 'pais_id'
        });
    }

    return Pais; 
}