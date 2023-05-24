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
import CreateCoursePage from './pages/CreateCoursePage/CreateCoursePage'
import { router } from './routes/AppRouter'
interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

function App() {
	const isLogin = useSelector((state: StateRoot) => state.auth.isLogin)
	const token = localStorage.getItem('token')

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
