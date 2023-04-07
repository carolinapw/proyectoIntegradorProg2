let db = require('../data/productsDb')

let indexController = {
    index: function (req, res){
        return res.render("index", {productsDb: db.productos})
    },
    search: function (req, res) {
        return res.render("search-results", {productsDb: db.productos})
    }
    
}



module.exports = indexController;