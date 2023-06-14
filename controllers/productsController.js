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
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                return res.render('product-edit', {producto: product})
            })
            .catch(function(error) {
                console.log(error);
            })
    
    },
    edit: function(req,res) {
        let errores = {message: ""};
        if (req.body.producto == '') {
            errores.message = errores.message + "Completar el campo Nombre del producto";
        }
        if (req.body.descripcion == '') {
            errores.message = errores.message + 'Completar la descripcion del producto';
        }
        if (errores.message.length > 0) {
            res.locals.errores = errores;
            return res.render('product-edit');
        } else {
            let producto= {
                nombreProducto: req.body.producto,
                descripcion: req.body.descripcion,
                //imagen: req.file.filename
                usuarios_id: req.session.user.id 
            }
            db.Product.update (producto, {where: {id: req.params.id}})
                .then(function (producto) {
                    return res.redirect ("/products/" + req.params.id);
                })
                .catch(function(error) {
                    console.log(error);
                })
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
        //     errores.message = errores.message + 'Agregar imagen';
        // }
        if (errores.message.length > 0) {
            res.locals.errores = errores;
            return res.render('product-add');
        }
        let productoNuevo = {
            nombreProducto: req.body.producto,
            descripcion: req.body.descripcion,
            //imagen: req.file.imagen,
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