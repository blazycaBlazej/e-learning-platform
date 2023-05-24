import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import HomePage from '../pages/HomePage/HomePage'
import CourseDetailsPage from '../pages/CourseDetailsPage/CourseDetailsPage'
import CoursesViewPage from '../pages/CoursesViewPage/CoursesViewPage'
import MainLayout from '../layouts/MainLayout'
import BasketPage from '../pages/BasketPage/BasketPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import { logoutAction } from '../pages/LogoutPage/LogoutPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { courses } from '../data/courses'
import WishListPage from '../pages/WishListPage/WishListPage'
import CreateCoursePage from '../pages/CreateCoursePage/CreateCoursePage'

interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFoundPage />,
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
					if (localStorage.getItem('token')) {
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
					if (localStorage.getItem('token')) {
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
								authorization: `Beer ${localStorage.getItem('token')}`,
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
								authorization: `Beer ${localStorage.getItem('token')}`,
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
			{
				path: 'instructor-courses',
				element: <WishListPage />,
				loader: async () => {
					const isLogin = localStorage.getItem('token')
					if (isLogin) {
						const response = await fetch('http://127.0.0.1:3001/getInstructorCourses', {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
								authorization: `Beer ${localStorage.getItem('token')}`,
							},
						})

						const data = await response.json()
						const dataArray = Object.values(data)
						console.log(dataArray)
						return { data: dataArray, type: 'instructorCourses' }
					} else {
						return redirect('/')
					}
				},
			},
			{
				path: 'create-course',
				element: <CreateCoursePage />,
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
