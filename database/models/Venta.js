// CREATE TABLE `ventas` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `usuario_id` int(11) DEFAULT NULL,
//     `cantidad_total` int(11) NOT NULL,
//     `fecha_compra` date NOT NULL,
//     `precio_total` decimal(11,2) NOT NULL,
//     PRIMARY KEY (`id`),
//     KEY `usuario_id` (`usuario_id`),
//     CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



const { dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    let alias = "Venta";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        usuario_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },

        cantidad_total: {
            type: dataTypes.INTEGER
        },

        fecha_compra: {
            type: dataTypes.DATE
        },

        precio_total: {
            type: dataTypes.DECIMAL
        }

    };

    let config = {
        tableName: "ventas",
        timestamps: false
    };

    const Venta = sequelize.define(alias, cols, config);

    Venta.associate = function(models) {
        Venta.belongsTo(models.Usuario,{
            as: 'usuarios',
            foreignKey: 'id'
        });

        
        Venta.belongsToMany(models.Producto,{
            as: 'ventas',
            through: models.Detalle,
            foreignKey: 'venta_id',
            otherKey: 'productos_id',
            timestamps: false

        });
    }

    return Venta; 
}