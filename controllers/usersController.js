//let db = require('../data/productsDb')
let db = require('../database/models');
//let bcrypt = require('bcryptjs');


let usersController = {
    perfil: function (req, res) {
        return res.render('profile', {
            infoUsuario: db.usuario,
            productsDb: db.productos
        });
    },
    showRegistro: function (req, res) {
        return res.render('register', {infoUsuario: db.usuario});
    },
    registro: function () { //toma los datos del formulario y los usa para crear el usuario en la base de datos.
        
    let errores = {};

    if(req.body.email=='') {
        errores.message = 'Completar el campo email';
        res.locals.errores = errores;
        return res.render('register')
    } else if (req.body.pass==''){
        errores.message = 'Completar el campo password';
        res.locals.errores = errores;
        return res.render('register');
    } else if(req.body.pass.length < 3) {
        errores.message = 'La constraseña debe tener más de tres caracteres';
        res.locals.errores = errores;
        return res.render('register');
    } else {
        db.User.findOne ({
            where: [{email: req.body.email}]
        })
        .then(function (usuario) {
            if (usuario != null) {
                errores.message = 'El email ya existe, elija uno nuevo';
                res.locals.errores = errores;
                return res.render('register');
            } else {
                // let passEncriptada = bcrypt.hashSync(req.body.pass, 10)
                // let user = {
                //     usuario: req.body.usuario,
                //     email: req.body.email,
                //     pass: passEncriptada
                   
                // }

            }
        })
    }

    },

    logIn: function (req, res) {
        return res.render('login', {logInDb: db.usuario});
    },
    editar: function (req, res) {
        return res.render('profile-edit', {infoUsuario: db.usuario});
    },
    seguir: function (res, render) {
        return res.render('profile') //qué página que renderiza?
    }
    // dejarDeSeguir: function (req, res) {
    //     return res.render()
    // }
}

module.exports = usersController