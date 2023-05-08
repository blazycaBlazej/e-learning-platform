import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import MainCourseViewPage from './pages/MainCourseViewPage/MainCourseViewPage'
import CoursesViewPage from './pages/CoursesViewPage/CouresesViewPage'
import MainLayout from './layouts/MainLayout'

import './App.scss'
import NotFound from './pages/NotFound/NotFound'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			errorElement: <NotFound />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: 'courses',
					element: <CoursesViewPage />,
				},
				{
					path: 'courses/:productId',
					element: <MainCourseViewPage />,
				},
			],
		},
	])
	return <RouterProvider router={router} />
}

export default App
