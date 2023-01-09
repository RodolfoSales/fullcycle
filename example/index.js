const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Rodolfo')`
connection.query(sql)

const sql2 = `SELECT name FROM people`

app.get('/', (req,res) =>  {
    connection.query(sql2, function (err, rows) {
      if (err) {
        console.log(err.message)
        res.send( '<h1>Full Cycle Rocks!</h1>')
      } else {
        console.log(rows)
        res.send(
            '<h1>Full Cycle Rocks!</h1><br>'+
            rows.map(r =>
              `${r.name}, `
            ).join('')
          )
      }
    })
    connection.end()
  })

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})