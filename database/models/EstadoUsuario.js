

module.exports = (sequelize, dataTypes) => {

    let alias = "EstadoUsuario";

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
        tableName: "estadousuario",
        timestamps: false
    };

    const EstadoUsuario = sequelize.define(alias, cols, config);

    EstadoUsuario.associate = function(models) {
        EstadoUsuario.hasMany (models.Usuario,{
            as: 'estadosusuario',
            foreignKey: 'estado_id'
            
        });
    }

    return EstadoUsuario; 
}