//Conecta ao banco de dados

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("URL_DATABASE");
    global.connection = connection;
    return connection;
}
connect();

//Mostra a tabela de usuários cadastrados

async function selectUsers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM users;');
    return rows;
}

//insere novos usuários na tabela
async function insertUsers(user) {
    const conn = await connect();
    const sql = 'INSERT INTO users(name, telegram, email, wallet, instagram, twitter) VALUES (?,?,?,?,?,?);';
    const values = [user.name, user.telegram, user.email, user.wallet, user.instagram, user.twitter];
    await conn.query(sql, values);
}


module.exports = { selectUsers, insertUsers }