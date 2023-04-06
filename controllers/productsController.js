let db = require('../data/productsDb');

let productsController = {

    detalle: function (req, res) {
        let id = req.params.id;
        let resultados = [];

        // if (id<) {
            
        // }
        //falta completar


        return res.render("product", )
    },
    edit: function (req, res) {
        return res.render('product-add')
    },
    // comment: function (req, res) {
    //     return res.render()
    // },
    // borrar: function (req, res) {
    //     return res.render('product-add')
    // },
    agregar: function (req, res) {
        return res.render('product-add')
    }
}





module.exports = productsController