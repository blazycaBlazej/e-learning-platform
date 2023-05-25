import * as dotenv from 'dotenv'
dotenv.config()

import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const port = process.env.PORT

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
})

//git
const authMiddleware = (req, res, next) => {
	const token = req.headers['authorization']?.split(' ')[1]
	if (!token) {
		return res.status(401).json({ message: 'Sign in' })
	}

	jwt.verify(token, ACCESS_TOKEN, (err, data) => {
		if (err) {
			return res.status(403).json({ message: 'Invalid token' })
		}

		req.user = data
		next()
	})
}

const app = express()

app.listen(port, () => console.log('Server listen'))

connection.connect(error =>
	error ? console.error('Database connection error:', error) : console.log('Connected to a MySQL database!')
)

app.use(cors())
app.use(express.json())

app.post('/register', (req, res) => {
	const { email, password, fullName } = req.body

	connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
		if (error) {
			console.error('Database query error:', error)
			res.status(500).json({ error: 'Internal server error' })
		} else if (results.length > 0) {
			res.status(409).json({ error: 'The user already exists' })
		} else {
			connection.query(
				'INSERT INTO users (email, password, fullName, wishlist, purchasedItemsId, instructorCourses) VALUES (?, ?, ?, ?, ?, ?)',
				[email, password, fullName, '', '', ''],
				(error, result) => {
					if (error) {
						console.error('Database query error:', error)
						res.status(500).json({ error: 'Internal server error' })
					} else {
						const userId = result.insertId
						const token = jwt.sign({ email, password, fullName, userId }, ACCESS_TOKEN)
						res.status(200).json({ message: 'User registered successfully', token, name: user.fullName })
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
			console.error('Database query error:', error)
			res.status(500).json({ error: 'Internal server error' })
		} else if (results.length === 0) {
			res.status(404).json({ error: 'Incorrect password or login' })
		} else {
			const user = results[0]
			if (user.password !== password) {
				res.status(401).json({ error: 'Incorrect password or login' })
			} else {
				const token = jwt.sign({ email, fullName, userId }, ACCESS_TOKEN)
				res.status(200).json({ message: 'Logged in successfully', token, name: user.fullName })
			}
		}
	})
})

//git
app.post('/addCourse', authMiddleware, (req, res) => {
	const { name, description, requirements, category } = req.body

	const user = req.user

	connection.query(
		`INSERT INTO courses (category, name, description, author, numberOfRating, rating, price, language, requirements, img)
			VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		[
			category,
			name,
			description,
			user.fullName,
			0,
			0,
			50,
			'English',
			requirements,
			'https://cdn.pixabay.com/photo/2020/11/17/13/22/student-5752322_1280.png',
		],
		(error, results) => {
			if (error) {
				console.error('Database query error:', error)
				res.status(500).json({ message: 'Internal server error' })
			} else {
				const courseId = results.insertId
				connection.query(
					`INSERT INTO userCreatedCourses (user_id, course_id)
					VALUES  (?, ?)`,
					[user.userId, courseId],
					(error, results) => {
						if (error) {
							console.error('Database query error:', error)
							res.status(500).json({ message: 'Internal server error' })
						} else {
							res.status(200).json({ message: 'Course was created', id: courseId })
						}
					}
				)
			}
		}
	)
})

//git
app.post('/buyCourse', authMiddleware, (req, res) => {
	const { id } = req.body

	const user = req.user

	connection.query(
		`INSERT INTO userCourses (user_id, course_id)
		VALUES  (?, ?)`,
		[user.userId, id],
		(error, results) => {
			if (error) {
				console.error('Database query error:', error)
				res.status(500).json({ message: 'Internal server error' })
			} else {
				res.status(200).json({ message: 'Course was purchased' })
			}
		}
	)
})

//git
app.get('/getMyCourses', authMiddleware, (req, res) => {
	const user = req.user

	connection.query(
		`SELECT courses.*
		FROM courses
		JOIN userCourses ON courses.id = userCourses.course_id
		WHERE userCourses.user_id = ?`,
		[user.userId],
		(error, results) => {
			if (error) {
				console.error('Database query error:', error)
				res.status(500).json({ message: 'Internal server error' })
			} else {
				res.status(200).json(results)
			}
		}
	)
})

//git
app.get('/getInstructorCourses', authMiddleware, (req, res) => {
	const user = req.user

	connection.query(
		`SELECT courses.*
		FROM courses
		JOIN userCreatedCourses ON courses.id = userCreatedCourses.course_id
		WHERE userCreatedCourses.user_id = ?`,
		[user.userId],
		(error, results) => {
			if (error) {
				console.error('Database query error:', error)
				res.status(500).json({ message: 'Internal server error' })
			} else {
				res.status(200).json(results)
			}
		}
	)
})

//git
app.post('/isBought', authMiddleware, (req, res) => {
	const user = req.user
	const { id } = req.body

	connection.query(
		`SELECT EXISTS(SELECT *
		FROM userCourses WHERE user_id=? AND course_id=?) AS isBought;
		`,
		[user.userId, id],
		(error, results) => {
			if (error) {
				console.error('Database query error:', error)
				res.status(500).json({ message: 'Internal server error' })
			} else {
				res.status(200).json(results)
			}
		}
	)
})

//git
app.post('/isAuthor', authMiddleware, (req, res) => {
	const user = req.user
	const { id } = req.body

	connection.query(
		`SELECT EXISTS(SELECT *
		FROM userCreatedCourses WHERE user_id=? AND course_id=?) AS isAuthor;
		`,
		[user.userId, id],
		(error, results) => {
			if (error) {
				console.error('Database query error:', error)
				res.status(500).json({ message: 'Internal server error' })
			} else {
				res.status(200).json(results)
			}
		}
	)
})

//git
app.post('/toggleWishList', authMiddleware, (req, res) => {
	const { id } = req.body

	const user = req.user

	connection.query(`SELECT * FROM userWishCourses WHERE user_id=?`, [user.userId], (error, results) => {
		if (error) {
			console.error('Database query error:', error)
			res.status(500).json({ message: 'Internal server error' })
		} else {
			let idToDelete
			const newResults = results.filter(item => {
				item.course_id !== id
				if (item.course_id === id) {
					idToDelete = item.id
					return false
				}
				return true
			})
			if (newResults.length === results.length) {
				connection.query(
					`INSERT INTO userWishCourses (user_id, course_id)
					VALUES  (?, ?)`,
					[user.userId, id],
					(error, results) => {
						if (error) {
							console.error('Database query error::', error)
							res.status(500).json({ message: 'Internal server error' })
						} else {
							res.status(200).json({ message: 'Wish list updated' })
						}
					}
				)
			} else {
				connection.query(
					`DELETE FROM userWishCourses WHERE id=?
						`,
					[idToDelete],
					(error, results) => {
						if (error) {
							console.error('Database query error::', error)
							res.status(500).json({ message: 'Internal server error' })
						} else {
							res.status(200).json({ message: 'Wish list updated' })
						}
					}
				)
			}
		}
	})
})

//git ?
app.post('/isOnWishList', authMiddleware, (req, res) => {
	const user = req.user
	const { id } = req.body

	connection.query(
		`SELECT EXISTS(SELECT *
		FROM userWishCourses WHERE user_id=? AND course_id=?) AS isOnWishList;
		`,
		[user.userId, id],
		(error, results) => {
			if (error) {
				console.error('Database query error:', error)
				res.status(500).json({ message: 'Internal server error' })
			} else {
				res.status(200).json(results)
			}
		}
	)
})

//git
app.get('/getWishListCourses', authMiddleware, (req, res) => {
	const user = req.user

	connection.query(
		`SELECT courses.*
		FROM courses
		JOIN userWishCourses ON courses.id = userWishCourses.course_id
		WHERE userWishCourses.user_id = ?`,
		[user.userId],
		(error, results) => {
			if (error) {
				console.error('Database query error:', error)
				res.status(500).json({ message: 'Internal server error' })
			} else {
				res.status(200).json(results)
			}
		}
	)
})

//git
app.get('/courses', (req, res) => {
	const { category } = req.query
	const query = category ? 'SELECT * FROM courses WHERE category = ?' : 'SELECT * FROM courses'
	const params = category ? [category] : []

	connection.query(query, params, (error, results) => {
		if (error) {
			console.error('Database query error:', error)
			res.status(500).json({ message: 'Internal server error' })
		} else {
			res.status(200).json(results)
		}
	})
})

//git
app.get('/courses/search/:search', (req, res) => {
	const { search } = req.params
	const searchTerm = `%${search}%`

	connection.query(
		'SELECT * FROM courses WHERE category LIKE ? OR name LIKE ? OR description LIKE ? OR author LIKE ?',
		[searchTerm, searchTerm, searchTerm, searchTerm],
		(error, results) => {
			if (error) {
				console.error(error)
				res.status(500).json({ error: 'Internal server error' })
			} else {
				res.status(200).json(results)
			}
		}
	)
})

//git
app.get('/courses/:id', (req, res) => {
	const { id } = req.params

	connection.query('SELECT * FROM courses WHERE id = ?', [id], (error, results) => {
		if (error) {
			console.error(error)
			res.status(500).json({ error: 'Internal server error' })
		} else {
			res.status(200).json(results)
		}
	})
})

// connection.end()
