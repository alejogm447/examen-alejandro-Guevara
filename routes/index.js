var express = require('express');
var router = express.Router();

/* GET home page. */
var datospersonales = {
  cuenta:"0801199409441",
  nombre:"Alejandro Jose Guevara Mendoza",
  correo:"alejandro_mendoza@outlook.es"
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/0801199409441', function(req, res, next) {
  res.json(datospersonales);
});

module.exports= router;
