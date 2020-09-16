const listaPizzas = require('../database/listaPizza');
const fs = require("fs");
const path = require('path');

const PizzaController = {
    index: (req, res) => {
        res.render('index', { listaPizzas });
        // res.send(listaPizzas);
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
        res.send(req.body);
    }
}

module.exports = PizzaController;