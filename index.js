const express = require('express')

const app = express();


(async() =>{

    const database = require ('./model/Servers/dborm');
    const Cliente =  require('./model/Entidade/cliente');
    console.log(' Criar tabela =======================');
    const resultado = await database.sequelize.sync();
    console.log(resultado);
    console.log('Criar um registro ============================');

const inserirCliente = await Cliente.create({
    nome: 'João da Silva',
    idade: 10,
    endereco: 'Rua Paulista, n 1000'

})
console.log(inserirCliente);

console.log("Buscar um registro================================");
const cliente = await Cliente.findByPk(1);
console.log(cliente);

console.log("Alterar registro================================");
const clienteAlterar = await Cliente.findByPk(1);
clienteAlterar.nome = "Icaro Freitas"
const resultadoSave = await clienteAlterar.save();
console.log(resultadoSave);

console.log("Buscar todos os registro================================");
const clientes = await clientes.findAll();
console.log(clientes)

console.log("Deletar o registro================================");
const clienteDelete = await clientes.findByPk(1);
clienteDelete.destroy();

})();

app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});