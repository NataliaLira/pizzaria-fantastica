var express = require('express');
var Router = express.Router();
const multer = require('multer');

const PizzaController = require('../controllers/PizzaController');
// chamando middleware de autenticação
const auth = require('../middlewares/auth');
// configurações middleware de armazenamento img
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'public/img/pizzas')
    },
    filename:(req,file, cb) => {
        cb(null, file.originalname)
    }
}); 
const upload = multer({ storage })


Router.get('/', PizzaController.index);
Router.get('/pizza/:id', PizzaController.show);
Router.get('/cadastrar', auth, PizzaController.create);
Router.post('/cadastrar', auth, upload.any() , PizzaController.store);
Router.get('/editar/:id', auth, PizzaController.edit);
Router.put('/editar/:id', auth, upload.any() , PizzaController.update);

module.exports = Router;