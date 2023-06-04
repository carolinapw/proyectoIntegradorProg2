let db = require('../data/productsDb')
// let db = require('../database/models');
// let op = db.Sequelize.Op

let indexController = {
    index: function (req, res){
        return res.render("index", {productsDb: db.productos})
    },
    search: function (req, res) {
        return res.render("search-results", {productsDb: db.productos})
    }
    
}

module.exports = indexController;