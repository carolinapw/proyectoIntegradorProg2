let db = require('../data/productsDb');

let productsController = {

    detalle: function (req, res) {
        let idRuta = req.params.id;
        let resultados = [];

        if (idRuta < db.productos.length) {
            for (let i = 0; i < db.productos.length; i++) {          
                if (idRuta == db.productos[i].id) {
                    resultados.push(db.productos[i]);
                }
            }
            
        }
        return res.render('product', {
            productsDb: resultados[0],
            commentsDb: db.comentarios
        })
        
    },
    edit: function (req, res) {
        return res.render('product-add', {productsDb:db.productos}, {infoUsuario:db.usuario});
    },
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