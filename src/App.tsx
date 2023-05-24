import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

import './App.scss'

import { useEffect } from 'react'
import { authAction } from './store/slices/authSlice/authSlice'

import { router } from './routes/AppRouter'
interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

function App() {
	// const isLogin = useSelector((state: StateRoot) => state.auth.isLogin)
	// const token = localStorage.getItem('token')

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
