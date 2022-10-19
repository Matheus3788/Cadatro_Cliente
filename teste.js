/*const express = require("express")
const app = express();

const db =require("./model/Servers/db");
//var http = require('http');// required: como se fosse o require



//http.createServer().listen(8081);//usar sem biblioteca
//console.log("O servidor está funcionamento!");



//esta sempre deve ser a ultima linha quando usamos express

app.get("/", function(req,resp){
    resp.send("Bem-Vindo ao meu app 💎📊💸");
})+

app.get("/contato", function(req,resp){
    resp.send("Página de contato do meu app 🎟🎫");
})

app.get("/", function(req,resp){
    resp.send("Página de produto do meu app");
})

(async () => {
nodeconsole.log('select*from usuario');
const usuarios = await db.selectUsuario();
console.log(usuarios);

console.log('INSERT INTO usuario');
const result = await db.insertUsuario({nome: "Zé", senha: "uihdssauihus783"});
console.log(result);

console.log('DELETE FROM usuario');
const result3 = await db.deleteUsuario(2);
console.log(result3);

console.log('UPDATE USUARIO');
const result2 = await db.updateUsuario(3, {nome: "Zé José", senha: "hhhdhjjjhsd7368"});
console.log(result2);

})();


app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});*/
git config --global user.email "you@example.com"
git config --global user.name "Your Name"