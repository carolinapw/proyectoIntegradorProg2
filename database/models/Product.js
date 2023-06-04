module.exports = function (sequelize, dataTypes) {
    let alias = 'Product' //nombre con el que identifico al modelo cuando lo necesite en el controlador

    let cols = { //todas la columnas que tengo en la tabla. Tiene datos de configuración, no de información.
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombreProducto: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING(1000)
        },
        imagen: {
            type: dataTypes.STRING
        }, 
        usuarios_id: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }

    }

    let config = {
        createdAt: "created_at", //indica al modelo cómo se llama el campo de auditoría en la tabla.
        updatedAt: "updated_at",  //indica al modelo cómo se llama el campo de auditoría en la tabla.
    }

    let producto = sequelize.define(alias, cols, config);

    producto.associate = function (models) {
        producto.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'usuarios_id'
        })

        producto.hasMany(models.Comment, {
            as: 'comment',
            foreignKey: 'productos_id'
        })
    }
    return producto;
}



