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

    let comentario = sequelize.define(alias, cols, config);
    return comentario;
}