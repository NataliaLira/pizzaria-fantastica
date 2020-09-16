var express = require('express');
var Router = express.Router();
const PizzaController = require('../controllers/PizzaController');

Router.get('/', PizzaController.index);
Router.get('/pizza/:id', PizzaController.show);
Router.get('/cadastrar', PizzaController.create);
Router.post('/cadastrar', PizzaController.store);

module.exports = Router;