

module.exports = (sequelize, dataTypes) => {

    let alias = "Estado";

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
        tableName: "estados",
        timestamps: false
    };

    const Estado = sequelize.define(alias, cols, config);

    Estado.associate = function(models) {
        Estado.hasMany (models.Producto,{
            as: 'estados',
            foreignKey: 'estado_id'
        });
    }

    return Estado; 
}