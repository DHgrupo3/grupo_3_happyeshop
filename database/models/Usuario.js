// CREATE TABLE `usuarios` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `nombre` varchar(45) NOT NULL,
//     `apellido` varchar(45) NOT NULL,
//     `email` varchar(45) NOT NULL,
//     `password` varchar(45) NOT NULL,
//     `pais_id` int(11) NOT NULL,
//     `imagen` varchar(45) NOT NULL,
//     PRIMARY KEY (`id`),
//     KEY `pais_id` (`pais_id`),
//     CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Usuario";
    
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

        password: {
            type: dataTypes.STRING
        },

        pais_id: {
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

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Pais,{
            as: 'pais',
            foreignKey: 'id'
        });

        Usuario.belongsTo(models.Venta,{
            as: 'venta',
            foreignKey: 'usuario_id'
        });


    }

    return Usuario; 
}