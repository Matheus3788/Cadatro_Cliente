const Connection = require("mysql2/typings/mysql/lib/Connection");

async function connect(){
    //Confirma se está conectado com a variável global
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/WEBII");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;

async function selectUsuario(){
    const conn = await connect();
    const [rows] = await conn.query('select*from usuario;');
    return rows;
}

module.exports = {selectUsuario}

async function insertUsuario(usuario){
    const conn = await connect();
    const sql = 'INSERT INTO usuario(nome, senha) VALUES (?,?);';
    const values = [usuario.nome, usuario.senha];
    return await conn.query(sql, values);
}

async function deleteUsuario(id){
    const conn = await connect();
    const sql = 'DELETE FROM usuario where id=?;';
    return await conn.query(sql, [id]);
}

async function updateUsuario(id,usuario){
    const conn = await connect();
    const sql = 'UPDATE usuario SET nome=?, senha=? WHERE id=?';
    const values = [usuario.nome, usuario.senha, id];
    return await conn.query(sql, values); 
}


module.exports = {selectUsuario, insertUsuario, deleteUsuario, updateUsuario}

}