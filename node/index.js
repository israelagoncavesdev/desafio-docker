const express = require('express')
const app = express()
const port = 3000

/*
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Israel')`
connection.query(sql)
connection.end()
*/

app.get('/', (req,res) => {
    
    var mysql = require('mysql');

    var con = mysql
    .createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database:'nodedb'
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM people;", function (err, result, fields) {
        if (err) throw err;

        var html = "<table><tr><td>ID</td><td>NOME</td><tr>";

        Object.keys(result).forEach(function(key) {
            var row = result[key];
            html = html + "<tr><td>" + row.id + "</td><td>" + row.name + "</td><tr>";
          });

          html = html + "</table>";

          res.send(html);

      });
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})