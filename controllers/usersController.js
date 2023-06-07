//let db = require('../data/productsDb')
let db = require('../database/models');
//let bcrypt = require('bcryptjs');


let usersController = {
    perfil: function (req, res) {

        let userId = req.params.id

        db.User.findByPk(userId, {
            include: [
                {association:'product'},
                {association:'comment'}
            ]
        })
            .then(function (dataUsuario) {
                return res.render('profile', {infoUsuario: dataUsuario}) //cambiar cosas en el profile.ejs
            })

        // return res.render('profile', {
        //     infoUsuario: db.usuario,
        //     productsDb: db.productos
        // });
    },

    showRegistro: function (req, res) {
        return res.render('register');
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
                    let passEncriptada = bcrypt.hashSync(req.body.pass, 10)
                    let user = {
                        usuario: req.body.usuario,
                        email: req.body.email,
                        password: passEncriptada,
                        fechaNacimiento: req.body.date,
                        documento: req.body.number
                        //fotoPerfil: req.body.
                    }
                    db.User.create(user) 
                        .then(function (userCreado) {
                            return res.redirect('/')
                        })
                        .catch(function(error) {
                            console.log(error);
                        })

                }
        })
    }

    },

    logIn: function (req, res) {
        return res.render('login');
    },
    signIn: function (req, res) {
        
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