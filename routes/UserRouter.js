var express = require('express');
var Router = express.Router();

const UserController = require('../controllers/UserController');

Router.get('/', UserController.index);
Router.get('/cadastrar', UserController.create);
Router.post('/cadastrar', UserController.store);
Router.get('/login', UserController.show);
Router.post('/login', UserController.login);

module.exports = Router;