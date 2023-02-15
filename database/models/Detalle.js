// CREATE TABLE `detalle_venta` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `venta_id` int(11) DEFAULT NULL,
//     `producto_id` int(11) DEFAULT NULL,
//     `cantidad` int(11) NOT NULL,
//     `precio_neto` decimal(11,2) NOT NULL,
//     `descuento` decimal(11,2) NOT NULL,
//     PRIMARY KEY (`id`),
//     KEY `venta_id` (`venta_id`),
//     KEY `detalle_venta_ibfk_2` (`producto_id`),
//     CONSTRAINT `detalle_venta_ibfk_1` FOREIGN KEY (`venta_id`) REFERENCES `ventas` (`id`),
//     CONSTRAINT `detalle_venta_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;




const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Detalle";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        venta_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },

        producto_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },

        cantidad: {
            type: dataTypes.INTEGER
        },

        precio_neto: {
            type: dataTypes.DECIMAL
        },

        descuento: {
            type: dataTypes.DECIMAL
        }

    };

    let config = {
        tableName: "detalle_venta",
        timestamps: false
    };

    const Detalle = sequelize.define(alias, cols, config);

    Detalle.associate = function(models) {
        Detalle.belongsTo(models.Venta,{
            as: 'ventas',
            foreignKey: 'id'
        });

        Detalle.belongsTo(models.Producto,{
            as: 'productos',
            foreignKey: 'id'
        });
    }

    return Detalle; 
}