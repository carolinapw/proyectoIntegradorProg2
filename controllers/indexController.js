let productsDb = require("../data/productsDb");

let indexController = {
    descripcion: function (req,res){
        return res.send (productsDb)
    },
    index: function (req, res){
        return res.send ("hola home")
    },
    
}



module.exports = indexController;