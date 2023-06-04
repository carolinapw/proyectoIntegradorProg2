module.exports = function (sequelize, dataTypes) {
    let alias = 'User' //nombre con el que identifico al modelo cuando lo necesite en el controlador

    let cols = { //todas la columnas que tengo en la tabla. Tiene datos de configuración, no de información.
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        }, 
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        documento: {
            type: dataTypes.INTEGER
        },
        fotoPerfil: {
            type: dataTypes.STRING
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

    let usuario = sequelize.define(alias, cols, config);

    usuario.associate = function (models) {
        usuario.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'usuarios_id'
        })

        usuario.hasMany(models.Comment, {
            as: 'comment',
            foreignKey: 'usuarios_id'
        })
    }

    return usuario;
}