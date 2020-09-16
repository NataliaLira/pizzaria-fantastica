const listaPizzas = require('../database/listaPizza.json');
const fs = require('fs');
const path = require('path');

const PizzaController = {
    index: (req, res) => {
        res.render('index', { listaPizzas });
    },
    show: (req, res) => {
        let id = req.params.id;
        res.render('pizza');
    },
    create: (req, res) => {
        res.render('create-pizza');
    },
    store: (req, res) => {
        let { nome, preco, ingredientes} = req.body;
        //transformando string em array de ingradientes
        ingredientes = ingredientes.split(',');

        // criando lógica do número de id do registro
        let id = listaPizzas.length + 1;
       
        //adicionar registro de pizza
        listaPizzas.push({
            id: id,
            nome: nome,
            preco:preco,
            img: '',
            ingredientes: ingredientes
        });

        fs.writeFileSync(path.join('database', 'listaPizza.json'), JSON.stringify(listaPizzas));
        
        res.redirect('/');
    }
}

module.exports = PizzaController;