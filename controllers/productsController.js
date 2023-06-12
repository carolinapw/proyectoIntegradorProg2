//let db = require('../data/productsDb');
let db = require('../database/models');

let productsController = {

    detalle: function (req, res) {
        let idRuta = req.params.id;
        //let resultados = [];

        db.Product.findByPk(idRuta, {
            include: [
                {association: "user"},
                {association: "comment", 
                    order: [
                        ['createdAt', 'DESC']
                    ],
                    include: [{association:"user"}]
                }
            ]
        })
            .then(function (resultados) {
                //return res.send(resultados)
                return res.render('product', {
                    productsDb: resultados,
                })
            })
            .catch(function(error) {
                console.log(error);
            })
        
    },
    showEdit: function (req, res) {
        return res.render('product-add', {
            productsDb: db.productos,
            infoUsuario: db.usuario
        });
    },
    agregar: function (req, res) {
        
    }
    // comment: function (req, res) {
        
    //     return res.render('product', {commentsDb: db.comentarios})
        
    // },
    // borrar: function (req, res) {
    //     return res.render('product-add')
    // },
    // agregar: function (req, res) {
    //     return res.render('product-add');
    // }
}





module.exports = productsController