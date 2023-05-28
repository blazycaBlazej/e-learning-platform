import { lazy, Suspense } from 'react'
import { createBrowserRouter, redirect, defer, json } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MainLayout } from '../layouts'

import { logoutAction } from '../pages/LogoutPage/LogoutPage'

interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))
const WishListPage = lazy(() => import('../pages/WishListPage/WishListPage'))
const CreateCoursePage = lazy(() => import('../pages/CreateCoursePage/CreateCoursePage'))
const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const CourseDetailsPage = lazy(() => import('../pages/CourseDetailsPage/CourseDetailsPage'))
const CoursesViewPage = lazy(() => import('../pages/CoursesViewPage/CoursesViewPage'))
const BasketPage = lazy(() => import('../pages/BasketPage/BasketPage'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<p>Loading...</p>}>
				<MainLayout />
			</Suspense>
		),
		errorElement: (
			<Suspense fallback={<p>Loading...</p>}>
				<NotFoundPage />
			</Suspense>
		),
		id: 'root',
		// loader: () => {
		// 	const token = localStorage.getItem('token')
		// 	return token
		// },
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<HomePage />,
					</Suspense>
				),
			},
			{
				path: 'basket',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<BasketPage />
					</Suspense>
				),
			},
			{
				path: 'login',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<LoginPage />
					</Suspense>
				),
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
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<RegisterPage />
					</Suspense>
				),
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
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<WishListPage />
					</Suspense>
				),
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
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<WishListPage />
					</Suspense>
				),
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

						return { data: dataArray, type: 'wishlist' }
					} else {
						return redirect('/')
					}
				},
			},
			{
				path: 'instructor-courses',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<WishListPage />
					</Suspense>
				),
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
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CreateCoursePage />
					</Suspense>
				),
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
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
			{
				path: '/courses/search/:search',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
				// loader: async ({ request, params }) => {
				// 	console.log(params.search)
				// 	try {
				// 		const response = await fetch(`http://127.0.0.1:3001/courses/search/${params.search}`, {
				// 			method: 'GET',
				// 			headers: {
				// 				'Content-type': 'application/json',
				// 			},
				// 		})
				// 		const data = await response.json()
				// 		return data
				// 	} catch (error) {
				// 		console.log(error)
				// 	}
				// },
			},
			{
				path: '/courses/:id',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CourseDetailsPage />
					</Suspense>
				),
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
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
			{
				path: '/courses/development',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
			{
				path: '/courses/marketing',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
			{
				path: '/courses/it-and-software',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
			{
				path: '/courses/personal-development',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
			{
				path: '/courses/business',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
			{
				path: '/courses/photography',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
			{
				path: '/courses/music',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<CoursesViewPage />
					</Suspense>
				),
			},
		],
	},
])
