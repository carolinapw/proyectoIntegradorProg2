module.exports = function (sequelize, dataTypes) {
    let alias = 'Comment' //nombre con el que identifico al modelo cuando lo necesite en el controlador

    let cols = { //todas la columnas que tengo en la tabla. Tiene datos de configuración, no de información.
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        productos_id: {
            type: dataTypes.INTEGER
        },
        usuarios_id: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING(600)
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: "comentarios",
        timestamps: true,
        //createdAt: "created_at", //indica al modelo cómo se llama el campo de auditoría en la tabla.
        //updatedAt: "updated_at",  //indica al modelo cómo se llama el campo de auditoría en la tabla.
    }

    let comentario = sequelize.define(alias, cols, config);

    comentario.associate = function (models) {
        comentario.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'productos_id'
        })

        comentario.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'usuarios_id'
        })
    }


    return comentario;
}