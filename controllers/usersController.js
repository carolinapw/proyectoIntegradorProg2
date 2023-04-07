let db = require('../data/productsDb')

let usersController = {
    perfil: function (req, res) {
        return res.render('profile', {
            infoUsuario: db.usuario,
            productsDb: db.productos
        });
    },
    registro: function (req, res) {
        return res.render('register', {infoUsuario: db.usuario});
    },
    logIn: function (req, res) {
        return res.render('login', {logInDb: db.usuario});
    },
    editar: function (req, res) {
        return res.render('profile-edit');
    },
    seguir: function (res, render) {
        return res.render('profile') //qué página que renderiza?
    }
    // dejarDeSeguir: function (req, res) {
    //     return res.render()
    // }
}

module.exports = usersController