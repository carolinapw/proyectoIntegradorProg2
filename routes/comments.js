let express = require('express');
let router = express.Router();

let commentsController = require('../controllers/commentsController');

router.get('/', commentsController.comment)

module.exports = router