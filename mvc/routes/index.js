var express = require('express');
var router = express.Router();
var db = require('../database/database');
var TaskController = require('../controller/TaskController');
/* GET home page. */
router.get('/', TaskController.index);

//create page
router.get('/create', TaskController.create)

//edit page
router.get('/edit/:id', TaskController.edit)

//save tasks
router.post('/save', TaskController.save)

//delete tasks
router.get('/delete/:id', TaskController.delete)

module.exports = router;
