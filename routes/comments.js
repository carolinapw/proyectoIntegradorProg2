let express = require('express');
let router = express.Router();

let commentsController = require('../controllers/commentsController');

router.post('/:id', commentsController.comment)

module.exports = router