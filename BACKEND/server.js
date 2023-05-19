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
// const authMiddleware = (req, res, next) => {
// 	const token = req.headers['authorization']?.split(' ')[1]
// 	if (!token) {
// 		return res.sendStatus(401).json({ message: 'Zaloguj sie' })
// 	}

// 	jwt.verify(token, ACCESS_TOKEN, (err, data) => {
// 		if (err) {
// 			return res.sendStatus(403).json({ message: 'Zaloguj sie' })
// 		}

// 		req.user = data
// 		next()
// 	})
// }
const authMiddleware = (req, res, next) => {
	const token = req.headers['authorization']?.split(' ')[1]
	if (!token) {
		return res.status(401).json({ message: 'Zaloguj się' })
	}

	jwt.verify(token, ACCESS_TOKEN, (err, data) => {
		if (err) {
			return res.status(403).json({ message: 'Nieprawidłowy token' })
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
				'INSERT INTO users (email, password, fullName, wishlist, purchasedItemsId) VALUES (?, ?, ?, ?, ?)',
				[email, password, fullName, '', ''],
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
				res.status(200).json({ message: 'Zalogowano pomyślnie', token, name: user.fullName })
			}
		}
	})
})

app.post('/buyCourse', authMiddleware, (req, res) => {
	const { id } = req.body

	const user = req.user
	if (user) {
		connection.query(`SELECT purchasedItemsId FROM users WHERE email = '${user.email}'`, (error, results) => {
			if (error) {
				console.error('Błąd zapytania do bazy danych:', error)
				res.status(500).json({ message: 'Wystąpił błąd serwera' })
			} else {
				const purchasedItems = results[0].purchasedItemsId
				const purchasedItemsArray = purchasedItems ? purchasedItems.split(' ') : []

				purchasedItemsArray.push(id)

				const updatedPurchasedItems = purchasedItemsArray.join(' ')
				connection.query(
					`UPDATE users SET purchasedItemsId = '${updatedPurchasedItems}' WHERE email = '${user.email}'`,
					(error, results) => {
						if (error) {
							console.error('Błąd zapytania do bazy danych:', error)
							res.status(500).json({ message: 'Wystąpił błąd serwera' })
						} else {
							res.status(200).json({ message: 'Zakupion kurs' })

							//
							connection.query(`SELECT wishlist FROM users WHERE email = '${user.email}'`, (error, results) => {
								if (error) {
									console.error('Błąd zapytania do bazy danych:', error)
								} else {
									const wishlist = results[0].wishlist // Pobierz listę życzeń z wyników zapytania

									// Sprawdź, czy id już istnieje na liście życzeń
									const wishlistArray = wishlist ? wishlist.split(' ') : []
									// console.log(wishlistArray)
									let newArray = wishlistArray.filter(item => item != id)

									// console.log(newArray)
									const updatedWishlist = newArray.join(' ') // Konwertuj tablicę z powrotem do tekstu
									// console.log(updatedWishlist)
									// Zaktualizuj bazę danych z nową listą życzeń
									connection.query(
										`UPDATE users SET wishlist = '${updatedWishlist}' WHERE email = '${user.email}'`,
										(error, results) => {
											if (error) {
												console.error('Błąd zapytania do bazy danych:', error)
											} else {
											}
										}
									)
								}
							})

							//
						}
					}
				)
			}
		})
	} else {
		res.status(401).json({ message: 'Nieprawidłowy token JWT' })
	}
})

app.get('/getPurchasedCourse', authMiddleware, (req, res) => {
	const user = req.user

	if (user) {
		// Pobierz informacje o liście życzeń z bazy danych dla danego użytkownika
		connection.query(`SELECT purchasedItemsId FROM users WHERE email = '${user.email}'`, (error, results) => {
			if (error) {
				console.error('Błąd zapytania do bazy danych:', error)
				res.status(500).json({ message: 'Wystąpił błąd serwera' })
			} else {
				res.status(200).json(results[0].purchasedItemsId)
			}
		})
	} else {
		res.status(401).json({ message: 'Nieprawidłowy token JWT' })
	}
})

app.post('/toggleWishList', authMiddleware, (req, res) => {
	const { id } = req.body

	const user = req.user
	if (user) {
		// Pobierz informacje o liście życzeń z bazy danych dla danego użytkownika
		connection.query(`SELECT wishlist FROM users WHERE email = '${user.email}'`, (error, results) => {
			if (error) {
				console.error('Błąd zapytania do bazy danych:', error)
				res.status(500).json({ message: 'Wystąpił błąd serwera' })
			} else {
				const wishlist = results[0].wishlist // Pobierz listę życzeń z wyników zapytania

				// Sprawdź, czy id już istnieje na liście życzeń
				const wishlistArray = wishlist ? wishlist.split(' ') : []
				// console.log(wishlistArray)
				let newArray = wishlistArray.filter(item => item != id)
				// console.log(newArray)
				// console.log('wishlistArray: ' + wishlistArray.length)
				// console.log('newArray: ' + newArray.length)
				if (wishlistArray.length === newArray.length) {
					newArray.push(id)
				}
				// console.log(newArray)
				const updatedWishlist = newArray.join(' ') // Konwertuj tablicę z powrotem do tekstu
				// console.log(updatedWishlist)
				// Zaktualizuj bazę danych z nową listą życzeń
				connection.query(
					`UPDATE users SET wishlist = '${updatedWishlist}' WHERE email = '${user.email}'`,
					(error, results) => {
						if (error) {
							console.error('Błąd zapytania do bazy danych:', error)
							res.status(500).json({ message: 'Wystąpił błąd serwera' })
						} else {
							res.status(200).json({ message: 'Zaktualizowano listę życzeń' })
						}
					}
				)
			}
		})
	} else {
		res.status(401).json({ message: 'Nieprawidłowy token JWT' })
	}
})

app.get('/getWishListItems', authMiddleware, (req, res) => {
	const user = req.user

	if (user) {
		// Pobierz informacje o liście życzeń z bazy danych dla danego użytkownika
		connection.query(`SELECT wishlist FROM users WHERE email = '${user.email}'`, (error, results) => {
			if (error) {
				console.error('Błąd zapytania do bazy danych:', error)
				res.status(500).json({ message: 'Wystąpił błąd serwera' })
			} else {
				res.status(200).json(results[0].wishlist)
			}
		})
	} else {
		res.status(401).json({ message: 'Nieprawidłowy token JWT' })
	}
})

app.get('/getWishListCourses', authMiddleware, (req, res) => {
	const user = req.user

	if (user) {
		// Pobierz informacje o liście życzeń z bazy danych dla danego użytkownika
		connection.query(`SELECT wishlist FROM users WHERE email = '${user.email}'`, (error, results) => {
			if (error) {
				console.error('Błąd zapytania do bazy danych:', error)
				res.status(500).json({ message: 'Wystąpił błąd serwera' })
			} else {
				const wishlist = results[0].wishlist
				if (wishlist) {
					const wishlistIds = wishlist.split(' ')
					const query = `SELECT * FROM courses WHERE id IN (${wishlistIds.map(id => `'${id}'`).join(',')})`
					connection.query(query, (error, courses) => {
						if (error) {
							console.error('Błąd zapytania do bazy danych:', error)
							res.status(500).json({ message: 'Wystąpił błąd serwera' })
						} else {
							res.status(200).json(courses)
						}
					})
				} else {
					res.status(200).json([]) // Pusta lista życzeń, gdy wishlist jest pusty
				}
			}
		})
	} else {
		res.status(401).json({ message: 'Nieprawidłowy token JWT' })
	}
})

app.get('/getMyCourses', authMiddleware, (req, res) => {
	const user = req.user

	if (user) {
		// Pobierz informacje o liście życzeń z bazy danych dla danego użytkownika
		connection.query(`SELECT purchasedItemsId FROM users WHERE email = '${user.email}'`, (error, results) => {
			if (error) {
				console.error('Błąd zapytania do bazy danych:', error)
				res.status(500).json({ message: 'Wystąpił błąd serwera' })
			} else {
				const wishlist = results[0].purchasedItemsId
				if (wishlist) {
					const wishlistIds = wishlist.split(' ')
					const query = `SELECT * FROM courses WHERE id IN (${wishlistIds.map(id => `'${id}'`).join(',')})`
					connection.query(query, (error, courses) => {
						if (error) {
							console.error('Błąd zapytania do bazy danych:', error)
							res.status(500).json({ message: 'Wystąpił błąd serwera' })
						} else {
							res.status(200).json(courses)
						}
					})
				} else {
					res.status(200).json([]) // Pusta lista życzeń, gdy wishlist jest pusty
				}
			}
		})
	} else {
		res.status(401).json({ message: 'Nieprawidłowy token JWT' })
	}
})


app.get('/courses', (req, res) => {
	const { category } = req.query

	const query = category ? 'SELECT * FROM courses WHERE category = ?' : 'SELECT * FROM courses'

	const params = category ? [category] : []

	connection.query(query, params, (error, results) => {
		if (error) {
			// Obsłuż błąd odpowiednio
			console.error(error)
			res.status(500).json({ error: 'Internal server error' })
		} else {
			res.status(200).json(results)
		}
	})
})

app.get('/courses/search/:search', (req, res) => {
	const { search } = req.params
	const searchTerm = `%${search}%`

	connection.query(
		'SELECT * FROM courses WHERE category LIKE ? OR name LIKE ? OR description LIKE ? OR author LIKE ?',
		[searchTerm, searchTerm, searchTerm, searchTerm],
		(error, results) => {
			if (error) {
				// Obsłuż błąd odpowiednio
				console.error(error)
				res.status(500).json({ error: 'Internal server error' })
			} else {
				res.status(200).json(results)
			}
		}
	)
})

app.get('/courses/:id', (req, res) => {
	const { id } = req.params

	connection.query('SELECT * FROM courses WHERE id = ?', [id], (error, results) => {
		if (error) {
			// Obsłuż błąd odpowiednio
			console.error(error)
			res.status(500).json({ error: 'Internal server error' })
		} else {
			res.status(200).json(results)
		}
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
