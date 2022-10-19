(async() =>{
const database = require('./Model/Servers/dborm');
const Cliente = require('./Model/Entidade/cliente');


console.log( "Criar tabela=========");
const resultado = await database.sequelize.sync();
console.log(resultado);








})();