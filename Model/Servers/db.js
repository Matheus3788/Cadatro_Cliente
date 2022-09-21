const Connection = require("mysql2/typings/mysql/lib/Connection");

async function connect(){
    //Confirma se está conectado com a variável global
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/WEBII");
    console.log("Cpnectou no MySQL!");
    global.connection = connection;
    return connection;

async function selectUsuario(){
    const conn = await connect();
    const [rows] = await conn.query('select*from usuario;');
    return rows;
}

module.exports = {selectUsuario}

}