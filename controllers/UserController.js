const listaPizzas = require('../database/listaPizza.json');
const listaUsers = require('../database/listaUser.json');
const fs = require('fs');
const path = require('path');

const UserController = {
    index: (req, res) => {
        res.render('user-menu', {listaPizzas});
    },
    create: (req,res)=>{
        res.render('create-user');
    },
    store: (req, res) => {
        let { nome, email, senha} = req.body;
       
        //adicionar usuário
        listaUsers.push({
            nome: nome,
            email:email,
            senha: senha
        });

        fs.writeFileSync(path.join('database', 'listaUser.json'), JSON.stringify(listaUsers));
        
        res.redirect('/');
    },

    show:(req,res) => {
        res.render('login-user');
    },
    login: (req,res) => {

        let {email,senha} = req.body;

        let user = listaUsers.find(
            user => (user.email == email && user.senha == senha)
        );

        if(user){
            req.session.user = user
            return res.redirect("/user");
        } else {
            return res.redirect("/user/login");
        }
    },
}


module.exports = UserController;