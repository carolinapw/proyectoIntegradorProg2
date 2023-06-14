//let db = require('../data/productsDb');
let db = require('../database/models');

let productsController = {

    agregarProducto: function (req,res) {
        if(req.session.user != undefined){
            return res.render('product-add'); //{usuarios: []}
        } else{ 
            return res.redirect('/users/register')
        }
    },

    detalle: function (req, res) {
        let idRuta = req.params.id;

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
                return res.send(resultados)
                return res.render('product', {
                    productsDb: resultados,
                })
            })
            .catch(function(error) {
                console.log(error);
            })
    },
    showEdit: function (req, res) {
        return res.render('product-edit', {
            productsDb: db.productos,
            infoUsuario: db.usuario
        });
    },
    edit: function(req,res) {
        let errores = {message: ""};
        if (req.body.producto == '') {
            errores.message = errores.message + "Completar el campo nombre";
        }
        if (req.body.descripcion == '') {
            errores.message = errores.message + 'Completar la descripcion del producto';
        }
        else {
            let producto= {
                nombreProducto: req.body.producto,
                descripcion:req.body.descripcion
            }
            db.Product.update (producto, {where: {id: req.params.id}});
            return res.redirect ("/products" + req.params.id);
        }
    },
    nuevoProducto: function (req, res) {
        let errores = {message: ''}
        if (req.body.producto == '') {
            errores.message = errores.message + 'Completar el campo producto';
        }
        if (req.body.descripcion == ''){
            errores.message = errores.message + 'Completar la descripcion del producto';
        }
        // if (req.file == undefined) {
        //   errores.message = errores.message + 'Agregar imagen';
        // }
        if (errores.message.length > 0) {
            res.locals.errores = errores;
            return res.render('product-add');
        }
        let productoNuevo = {
            nombreProducto: req.body.producto,
            descripcion: req.body.descripcion,
            //image: req.file.filename,
            usuarios_id: req.session.user.id
        }
        db.Product.create(productoNuevo)
            .then(function (productoNuevo) {
                return res.redirect('/products/' + productoNuevo.id) //a donde???
            })
            .catch(function(error) {
                console.log(error);
            })
    },
    borrar: function (req, res) {
        db.Product.destroy({
            where: {id: req.params.id}
        })
        .then(function (borrarProducto) {
            return res.redirect('/')
        })
        .catch(function(error) {
            console.log(error);
        })
       
        
    }
}





module.exports = productsController