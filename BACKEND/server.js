import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const port = 3001

//PROCESS.ENV
const ACCESS_TOKEN = 'asfsgfvdg834tkjh4lkt23jilt2l3rtmlegfeljfwoiu3w4kh34trknektwl3rl3tle34t'

//PROCESS.ENV
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'zaq12wsx',
	database: 'platform2',
})

//MIDDLEWARE
const authMiddleware = (req, res, next) => {
	const token = req.headers['authorization']?.split(' ')[1]
	if (!token) {
		return res.sendStatus(401).json({ message: 'Zaloguj sie' })
	}

	jwt.verify(token, ACCESS_TOKEN, (err, data) => {
		if (err) {
			return res.sendStatus(403).json({ message: 'Zaloguj sie' })
		}

		req.user = data
		next()
	})
}

const app = express()

app.listen(port, () => {
	console.log('Server slucha')
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
						const token = jwt.sign({ email, password, fullName }, ACCESS_TOKEN)
						res.status(200).json({ message: 'Użytkownik zarejestrowany pomyślnie', token })
					}
				}
			)
		}
	})
})

app.post('/login', (req, res) => {
	const { email, password } = req.body

	connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
		if (error) {
			console.error('Błąd zapytania SQL:', error)
			res.status(500).json({ error: 'Wewnętrzny błąd serwera' })
		} else if (results.length === 0) {
			res.status(404).json({ error: 'Nieprawidłowe hasło lub login' })
		} else {
			const user = results[0]
			if (user.password !== password) {
				res.status(401).json({ error: 'Nieprawidłowe hasło lub login' })
			} else {
				const token = jwt.sign(user, ACCESS_TOKEN)
				res.status(200).json({ message: 'Zalogowano pomyślnie', token })
			}
		}
	})
})

//test
app.get('/api/', (req, res) => {
	connection.query('SELECT * FROM courses', (err, rows, fields) => {
		if (err) throw err
		res.json(rows)
	})
})

//est
app.get('/admin', authMiddleware, (req, res) => {
	connection.query('SELECT * FROM courses', (err, rows, fields) => {
		if (err) throw err
		res.json(rows)
	})
})

// connection.end()
