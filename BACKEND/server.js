import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'
const port = 3001

const app = express()

app.listen(port, () => {
	console.log('Server slucha')
})

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'zaq12wsx',
	database: 'platform2',
})

connection.connect(error => {
	if (error) {
		console.error('Błąd połączenia z bazą danych:', error)
	} else {
		console.log('Połączono z bazą danych MySQL!')
	}
})

app.use(cors())
app.use(express.json())

// connection.end()
