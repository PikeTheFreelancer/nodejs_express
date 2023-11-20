var db = require('../../crud/database/database_connect');
var Task = require('../models/Task');
class TaskController{
    index(req, res){
        Task.getAll(function (err, data) {
            res.render('index', {
                tasks : data
            });
        })
    }

    create(req, res, next) {
        res.render('create');
    }
    
    edit(req, res) {
        var id = req.params.id;
        Task.getOne(id, function (err, data) {
            res.render('edit', {
              tasks : data
            });
        });
    }

    save(req, res, next) {
        var id = req.body.id;
        var title = req.body.title;

        Task.save(id, title, function (err, data) {
            res.redirect('/');
        })
    }

    delete (req, res) {
        Task.delete(req.params.id, function(err) {
            res.redirect('/');
        })
    }
}

module.exports = new TaskController;