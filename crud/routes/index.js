var express = require('express');
var router = express.Router();
var db = require('../database/database_connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sql = 'Select * from posts';
  db.query(sql, function (error, data) {
    res.render('index', { posts: data });
  })
});

// create page
router.get('/create', function(req, res, next) {
  res.render('create');
});

// edit page
router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM posts WHERE id = '${id}'`;
  db.query(sql, function(err, data) {
    console.log(data);
    res.render('edit', {
      posts : data
    });
  })
});

//action
router.post('/save', function(req, res, next) {
  if (!req.body.id) {
    var title = req.body.title;
    var sql = `Insert into posts set title = '${title}'`;
    db.query(sql, function(err, data) {
      console.log('inserted');
      res.redirect('/');
    })
  }else{
    var title = req.body.title;
    var id = req.body.id;
    var sql = `Update posts set title = '${title}' where id = '${id}'`;
    db.query(sql, function(err, data) {
      console.log('edited');
      res.redirect('/');
    })
  }
});

router.get('/delete/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `Delete from posts where id = '${id}'`;
  db.query(sql, function(err, data) {
    res.redirect('/');
  })
})

router.get('/search', function(req, res, next) {
  var searchStr = req.query.searchStr;
  var sql = `Select * from posts where title like '${searchStr}'`;
  db.query(sql, function(err, data, next) {
    res.render('index', {
      posts : data
    })
  })
})

module.exports = router;
