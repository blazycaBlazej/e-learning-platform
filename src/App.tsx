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
interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

function App() {
	const isLogin = useSelector((state: StateRoot) => state.auth.isLogin)
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
					path: 'courses',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el)

						return data
					},
				},
				{
					path: 'courses/:id',
					element: <CourseDetailsPage />,
					loader: ({ request, params }) => {
						const data = courses.filter(el => el.id === Number(params.id))
						return data
					},
				},
				{
					path: '/courses/design',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el.category === 'design')

						return data
					},
				},
				{
					path: '/courses/development',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el.category === 'development')

						return data
					},
				},
				{
					path: '/courses/marketing',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el.category === 'marketing')

						return data
					},
				},
				{
					path: '/courses/it-and-software',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el.category === 'IT and Software')

						return data
					},
				},
				{
					path: '/courses/personal-development',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el.category === 'Personal Development')

						return data
					},
				},
				{
					path: '/courses/business',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el.category === 'Business')

						return data
					},
				},
				{
					path: '/courses/photography',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el.category === 'Photography')

						return data
					},
				},
				{
					path: '/courses/music',
					element: <CoursesViewPage />,
					loader: () => {
						const data = courses.filter(el => el.category === 'Music')

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
