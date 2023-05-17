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

app.post('/register', (req, res) => {
	const { email, password, fullName } = req.body

	connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
		if (error) {
			console.error('Błąd zapytania SQL:', error)
			res.status(500).json({ error: 'Wewnętrzny błąd serwera' })
		} else if (results.length > 0) {
			res.status(409).json({ error: 'Użytkownik już istnieje' })
		} else {
			connection.query(
				'INSERT INTO users (email, password, fullName) VALUES (?, ?, ?)',
				[email, password, fullName],
				error => {
					if (error) {
						console.error('Błąd zapytania SQL:', error)
						res.status(500).json({ error: 'Wewnętrzny błąd serwera' })
					} else {
						res.status(200).json({ message: 'Użytkownik zarejestrowany pomyślnie' })
					}
				}
			)
		}
	})
})

app.get('/api/', (req, res) => {
	connection.query('SELECT * FROM courses', (err, rows, fields) => {
		if (err) throw err
		res.json(rows) // wysłanie wyniku zapytania w formacie JSON
	})
})


// connection.end()
