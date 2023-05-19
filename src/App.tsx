import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import CourseDetailsPage from './pages/CourseDetailsPage/CourseDetailsPage'
import CoursesViewPage from './pages/CoursesViewPage/CoursesViewPage'
import MainLayout from './layouts/MainLayout'
import BasketPage from './pages/BasketPage/BasketPage'
import NotFound from './pages/NotFoundPage/NotFoundPage'
import { courses } from './data/courses'
import './App.scss'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { logoutAction } from './pages/LogoutPage/LogoutPage'
import { useEffect } from 'react'
import { authAction } from './store/slices/authSlice/authSlice'
import WishListPage from './pages/WishListPage/WishListPage'
interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

function App() {
	const isLogin = useSelector((state: StateRoot) => state.auth.isLogin)
	const token = localStorage.getItem('token')
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			errorElement: <NotFound />,
			id: 'root',
			// loader: () => {
			// 	const token = localStorage.getItem('token')
			// 	return token
			// },

			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: 'basket',
					element: <BasketPage />,
				},
				{
					path: 'login',
					element: <LoginPage />,
					loader: () => {
						if (isLogin) {
							return redirect('/')
						} else {
							return null
						}
					},
				},
				{
					path: 'register',
					element: <RegisterPage />,
					loader: () => {
						if (isLogin) {
							return redirect('/')
						} else {
							return null
						}
					},
				},
				{
					path: '/my-course',
					element: <WishListPage />,
					loader: async () => {
						const isLogin = localStorage.getItem('token')
						if (isLogin) {
							const response = await fetch('http://127.0.0.1:3001/getMyCourses', {
								method: 'GET',
								headers: {
									'Content-Type': 'application/json',
									authorization: `Beer ${token}`,
								},
							})

							const data = await response.json()
							const dataArray = Object.values(data)
							console.log(dataArray)
							return { data: dataArray, type: 'myCourse' }
						} else {
							return redirect('/')
						}
					},
				},
				{
					path: 'wishlist',
					element: <WishListPage />,
					loader: async () => {
						const isLogin = localStorage.getItem('token')
						if (isLogin) {
							const response = await fetch('http://127.0.0.1:3001/getWishListCourses', {
								method: 'GET',
								headers: {
									'Content-Type': 'application/json',
									authorization: `Beer ${token}`,
								},
							})

							const data = await response.json()
							const dataArray = Object.values(data)
							console.log(dataArray)
							return { data: dataArray, type: 'wishlist' }
						} else {
							return redirect('/')
						}
					},
				},
				// {
				// 	path: '/logout',
				// 	action: logoutAction,
				// 	loader: () => {
				// 		const token = localStorage.getItem('token')
				// 		if (!token) {
				// 			return redirect('/')
				// 		} else {
				// 			return null
				// 		}
				// 	},
				// },
				{
					path: '/courses',
					element: <CoursesViewPage />,
					loader: async () => {
						const data = await fetch('http://127.0.0.1:3001/courses', {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						})

						return data
					},
				},
				{
					path: '/courses/search/:search',
					element: <CoursesViewPage />,
					loader: async ({ request, params }) => {
						console.log(params.search)
						try {
							const response = await fetch(`http://127.0.0.1:3001/courses/search/${params.search}`, {
								method: 'GET',
								headers: {
									'Content-type': 'application/json',
								},
							})
							const data = await response.json()
							return data
						} catch (error) {
							console.log(error)
						}
					},
				},

				{
					path: '/courses/:id',
					element: <CourseDetailsPage />,
					loader: async ({ request, params }) => {
						const response = await fetch(`http://127.0.0.1:3001/courses/${params.id}`, {
							method: 'GET',
							headers: {
								'Content-type': 'application/json',
							},
						})

						const data = await response.json()

						return data
					},
				},
				{
					path: '/courses/design',
					element: <CoursesViewPage />,
					loader: async () => {
						// const data = courses.filter(el => el.category === 'design')

						// return data
						const data = await fetch('http://127.0.0.1:3001/courses?category=Design', {
							method: 'GET',
							headers: {
								'Content-type': 'application/json',
							},
							// body: JSON.stringify({ category: 'Design' }),
						})
						return data
					},
				},
				{
					path: '/courses/development',
					element: <CoursesViewPage />,
					loader: async () => {
						// const data = courses.filter(el => el.category === 'development')

						// return data
						const data = await fetch('http://127.0.0.1:3001/courses?category=Development', {
							method: 'GET',
							headers: {
								'Content-type': 'application/json',
							},
						})
						return data
					},
				},
				{
					path: '/courses/marketing',
					element: <CoursesViewPage />,
					loader: async () => {
						// const data = courses.filter(el => el.category === 'marketing')

						// return data

						const data = await fetch('http://127.0.0.1:3001/courses?category=Marketing', {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						})
						return data
					},
				},
				{
					path: '/courses/it-and-software',
					element: <CoursesViewPage />,
					loader: async () => {
						const data = await fetch('http://127.0.0.1:3001/courses?category=IT and Software', {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						})

						return data
						// const data = courses.filter(el => el.category === 'IT and Software')

						// return data
					},
				},
				{
					path: '/courses/personal-development',
					element: <CoursesViewPage />,
					loader: async () => {
						const data = await fetch('http://127.0.0.1:3001/courses?category=Personal Development', {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						})

						return data
						// const data = courses.filter(el => el.category === 'Personal Development')

						// return data
					},
				},
				{
					path: '/courses/business',
					element: <CoursesViewPage />,
					loader: async () => {
						const data = await fetch('http://127.0.0.1:3001/courses?category=Business', {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						})

						return data
					},
				},
				{
					path: '/courses/photography',
					element: <CoursesViewPage />,
					loader: async () => {
						const data = await fetch('http://127.0.0.1:3001/courses?category=Photography', {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						})

						return data
					},
				},
				{
					path: '/courses/music',
					element: <CoursesViewPage />,
					loader: async () => {
						const data = await fetch('http://127.0.0.1:3001/courses?category=Music', {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						})

						return data
					},
				},
			],
		},
	])

	const dispatch = useDispatch()
	useEffect(() => {
		const handleLoad = () => {
			if (localStorage.getItem('token')) {
				dispatch(authAction.login())
			}
		}
		addEventListener('load', handleLoad)
		return () => removeEventListener('load', handleLoad)
	}, [])

	return <RouterProvider router={router} />
}

export default App
