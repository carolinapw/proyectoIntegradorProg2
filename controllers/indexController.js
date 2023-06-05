//let db = require('../data/productsDb')
let db = require('../database/models');
let op = db.Sequelize.Op

let indexController = {
    index: function (req, res){
        db.Product.findAll({
            include: [
                {association: "user"}
            ],
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 8
        })
            .then(function (resultados) {
                res.render('index', {productsDb: resultados})
            })
            .catch(function(error) {
                console.log(error);
            })
            
    },
    search: function (req, res) {
        db.Product.findAll({
            where: [
                
                    {nombreProducto: {[op.like]: "%" + req.query.search + "%"}}
                    //{descripcion: {[op.like]: "%" + req.query.search + "%"}}
                
                
                ]
        })
            .then(function (resultadosSearch) {
                return res.render("search-results", {productsDb: resultadosSearch})
            })
            .catch(function(error) {
                console.log(error);
            })
        
    }
    
}

module.exports = indexController;