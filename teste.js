const express = require("express")
const app = express();


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





app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});
