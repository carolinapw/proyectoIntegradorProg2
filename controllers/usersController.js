//let db = require('../data/productsDb')
let db = require('../database/models');
let bcrypt = require('bcryptjs');


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

    },

    showRegistro: function (req, res) {
        return res.render('register');
    },
    registro: function (req, res) { //toma los datos del formulario y los usa para crear el usuario en la base de datos.
        //return res.send(req.body)
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
                        contrasena: passEncriptada,
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
        //Si el usuario está logueado que vaya a home
        if (req.session.user != undefined) {
            res.redirect('/') //Hay que poner en index.ejs lo del header logueado y no logueado
        } else {
            return res.render('login');
        }
        
    },
    signIn: function (req, res) {
        let errores = {}

        db.User.findOne({
                where: [
                    {email: req.body.email}
                ]
            })
            .then(function (usuarioLogueado) {
                if(usuarioLogueado == null) {
                    errores.message = 'Completar el campo email';
                    res.locals.errores = errores;
                    return res.render('login')
                }
                if(usuarioLogueado==undefined) { // No funciona
                    errores.message = 'El email no existe';
                    res.locals.errores = errores;
                    return res.render('login')
                }

                //Validar la contraseña antes de loguear
                let check = bcrypt.compareSync(req.body.pass, usuarioLogueado.password)
                
                if(check == false) {
                    errores.message = 'La contraseña es incorrecta'
                    res.locals.errores = errores
                    return res.render('login')
                } else {
                    //Pongo al usuario en sesión
                    req.session.user = {
                        email: usuarioLogueado.email, //Traigo la info de la base de datos
                        usuario: usuarioLogueado.usuario
                    }
                    //Pregunto si el usuario tildó el checkbox para recordarlo
                    if(req.body.recordarme != undefined) {
                        res.cookie('cookieUsuario',usuarioLogueado.id, {maxAge:1000*6*100} )
                    }
                    return res.redirect('/')
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    },

    logout: function (req,res) {
        req.session.destroy()

        if(req.cookies.cookieUsuario != undefined) {
            res.clearCookie('cookieUsuario')
        }
        return res.redirect('/')
    },
    editar: function (req, res) {
        return res.render('profile-edit');
    },
    actualizar: function (req, res) {
        //Completar
    },
    seguir: function (res, render) {
        return res.render('profile') //qué página que renderiza?
    }
    // dejarDeSeguir: function (req, res) {
    //     return res.render()
    // }
}

module.exports = usersController