let db = require('../database/models')


let commentsController = {
    comment: function (req, res) {
        
        if (req.session.user != undefined) {
            let nuevoComment = {
                productos_id: req.params.id,
                usuarios_id: req.session.user.id,
                texto: req.body.comentario
            }
            db.Comment.create(nuevoComment)
            .then(function () {
                res.redirect('/products/'+ req.params.id)
            })
            .catch(function (error) {
                console.log(error);
            })
        } else {
            return res.redirect('/users/login')
        }
       
    } 
}

module.exports = commentsController