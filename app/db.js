// IMPORTAÇÃO DA LIB mysql
const mysql = require('mysql');

// CONEXÃ COM BD
const connection = mysql.createConnection({
  // host: 'pos-db', // Para conexão Docker via Linux
  host: 'host.docker.internal', // Para conexão Docker via Linux
  user: 'root',
  password: 'root',
  database: 'pos_db'
});

// EXEMPLO: Conecta com o MySQL e gera log na Docker ao inicializar o servidor se a conexão rolou ou não
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// EXEMPLO: Faz uma busca e joga no log da Docker assim que o servidor é inicializado
connection.query('SELECT * FROM postagens', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

module.exports = connection;