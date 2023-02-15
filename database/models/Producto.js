// CREATE TABLE `productos` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `categoria_id` int(11) DEFAULT NULL,
//     `codigo` varchar(45) NOT NULL,
//     `nombre` varchar(45) NOT NULL,
//     `descripcion` varchar(200) NOT NULL,
//     `imagen` varchar(45) NOT NULL,
//     `precio` decimal(11,2) NOT NULL,
//     `stock` int(11) NOT NULL,
//     PRIMARY KEY (`id`),
//     KEY `categoria_id` (`categoria_id`),
//     CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


// const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        categoria_id: {
            type: dataTypes.INTEGER,
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
            type: dataTypes.DECIMAL
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

    Producto.associate = function(models) {
        Producto.belongsTo(models.Categoria,{
            as: 'categoria',
            foreignKey: 'id'
        });

        Producto.belongsTo(models.Detalle,{
            as: 'producto',
            foreignKey: 'producto_id'
        });

    }

    return Producto; 
}