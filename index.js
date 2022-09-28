console.log('select*from usuario');
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