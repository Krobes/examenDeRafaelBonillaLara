var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/personajes', function(req, res) {
  res.render('index', {});
});

module.exports = router;
