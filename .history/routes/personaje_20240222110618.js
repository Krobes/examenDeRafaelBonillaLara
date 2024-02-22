var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/personaje/todos');
});

router.get('/personaje', function(req, res) {
  res.redirect('/personaje/todos');
});

router.get('/personaje/todos', function(req, res) {
  res.render('personajes');
});


module.exports = router;
