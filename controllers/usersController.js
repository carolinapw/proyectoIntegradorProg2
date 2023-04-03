let usersController = {
    perfil: function (req, res) {
        return res.render('profile');
    },
    registro: function (req, res) {
        return res.render('register');
    },
    logIn: function (req, res) {
        return res.render('login');
    },
    editar: function (req, res) {
        return res.render('profile-edit');
    },
    seguir: function (res, render) {
        return res.render('profile') //qué página que renderiza?
    },
    // dejarDeSeguir: function (req, res) {
    //     return res.render()
    // }
}

module.exports = usersController