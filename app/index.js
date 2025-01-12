const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.get("/", (req, res) => {
  res.send('FIAP 2025')
})

app.get("/get", (req, res) => {
  // Seleciona todos os e-mails
  db.query('SELECT titulo FROM postagens', function (error, results, fields) {
    if (error) throw error;
    return res.json({results});  
  });
});

app.post("/post", (req, res) => {

  let sql = "INSERT INTO postagens (titulo, autor, conteudo) VALUES (?,?,?)";

  /*
  BODY:
  {
    "name": "Algum nome",
    "email": "algum@email.com"
  }
  */
  let titulo = req.body.titulo;
  let autor = req.body.autor;
  let conteudo = req.body.conteudo;
  let queryArr = [titulo,autor,conteudo];

  db.query(sql, queryArr, function (err, result) {
    if (err) throw err;
    console.log("Número de registros inseridos:: " + result.affectedRows);
  });
  return res.json(req.body);
});

app.post("/postlist", (req, res) => {

  let sql = "INSERT INTO postagens (titulo, autor, conteudo) VALUES (?,?,?)";

  /*
  BODY:
  [
    {
      "name": "Algum nome 1",
      "email": "algum@email1.com"
    },{
      "name": "Algum nome 2",
      "email": "algum@email2.com"
    },{
      "name": "Algum nome 3",
      "email": "algum@email3.com"
    }
    
  ]
  */
  req.body.forEach(element => {
    let titulo = element.titulo;
    let autor = element.autor;
    let conteudo = element.conteudo;
    let queryArr = [titulo,autor,conteudo];

    db.query(sql, queryArr, function (err, result) {
      if (err) throw err;
      console.log("Número de registros inseridos: " + result.affectedRows);
    });
  });

  return res.json(req.body);
});

// Define a porta a ser liberada para o acesso
// localhost:8080
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});