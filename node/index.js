const express = require('express')
const app = express()
const port = 3000


const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

try {
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(name,created) values('Israel',now())`
    connection.query(sql)
    connection.end()
} catch (error) {

}

app.get('/', (req, res) => {

    try {

        var mysql = require('mysql');

        var con = mysql
            .createConnection({
                host: 'db',
                user: 'root',
                password: 'root',
                database: 'nodedb'
            });

        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM people;", function (err, result, fields) {
                if (err) throw err;

                var html = "<h1>Full Cycle Rocks!</h1>";
                html = html + "<br><br>";
                html = html + "<table><tr><td>ID</td><td>NOME</td><td>DATA</td><tr>";

                Object.keys(result).forEach(function (key) {
                    var row = result[key];
                    html = html + "<tr><td>" + row.ID + "</td><td>" + row.NAME + "</td><td>" + row.CREATED + "</td><tr>";
                });

                html = html + "</table>";

                res.send(html);

            });
        });
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})