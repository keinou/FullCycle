// sudo docker run --rm -it -v $(pwd)/:/user/src/app/ -p 3000:3000 node:15 bash
// cd /user/src/app/

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
connection = mysql.createConnection(config)

sql = `create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id));`
connection.query(sql)

sql = `INSERT INTO people(name) values('Rafael Karczevski')`
connection.query(sql)
connection.end()

app.get('/', (req,res) => {
    var response = '<h1>Full Cycle</h1>'
    
    connection = mysql.createConnection(config)
    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        var i=1;
            response += result[0]['name']
            res.send(response)
      });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})