//let db = require('../data/productsDb');
let db = require('../database/models');

let productsController = {

    agregarProducto: function (req,res) {
        if(req.session.user != undefined){
            return res.render('product-add', {usuarios: []});
        } else{ 
            return res.redirect('users/register')
        }
    },

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
                return res.render('product', {
                    productsDb: resultados,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        // if (idRuta < db.productos.length) {
        //     for (let i = 0; i < db.productos.length; i++) {          
        //         if (idRuta == db.productos[i].id) {
        //             resultados.push(db.productos[i]);
        //         }
        //     }
            
        // }
        // return res.render('product', {
        //     productsDb: resultados[0],
        //     commentsDb: db.comentarios
        // })
        
    },
    showEdit: function (req, res) {
        return res.render('product-add', {
            productsDb: db.productos,
            infoUsuario: db.usuario
        });
    },
    nuevoProducto: function (req, res) {
        let errores = {message: ''}
        if (req.body.producto == '') {
            errores.message = errores.message + 'Completar el campo marca';
        }
        if (req.body.descripcion == ''){
            errores.message = errores.message + 'Completar la descripcion del producto';
        }
        // if (req.file == undefined) {
        //   errores.message = errores.message + 'Agregar imagen';
        // }
        
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