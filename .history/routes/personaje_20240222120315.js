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

router.get('/personaje/todos', async(req, res) =>{
  try{
    const personajes = await Personaje.find({}, 'id name');
    res.render('lista', {personajes});
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/personaje/:id', async(req, res) =>{
  const {id} = req.params;
  try{
    const personaje = await Personaje.find({id:id}, 'id name gender image url created');
    let fecha = new Date(personaje[0].created);
    let anio = fecha.getFullYear();
    let mes = fecha.getMonth();
    let dia = fecha.getDay();
    personaje[0].created = anio + '-' + mes + '-' + dia;
    if(personaje[0].gender == 'male')
      personaje[0].gender == 'masculino'
    else if(personaje[0].gender == 'female')
    personaje[0].gender == 'femenino'
    res.render('personaje', {personaje});
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
