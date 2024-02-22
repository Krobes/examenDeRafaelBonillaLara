var express = require('express');
var router = express.Router();
var Personaje = require('../models/personaje');

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/personaje/todos');
});

router.get('/personaje', function(req, res) {
  res.redirect('/personaje/todos');
});

router.get('/personaje/todos/:id', async(req, res) =>{
  try{
    const personajes = await Personaje.find({});
    res.render('personaje', {personajes});
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/personaje/todos', async(req, res) =>{
  try{
    const personajes = await Personaje.find({}, 'id name');
    res.render('lista', {personajes});
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});


module.exports = router;
