import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CourseDetailsPage from './pages/CourseDetailsPage/CourseDetailsPage'
import CoursesViewPage from './pages/CoursesViewPage/CoursesViewPage'
import MainLayout from './layouts/MainLayout'
import BasketPage from './pages/BasketPage/BasketPage'
import NotFound from './pages/NotFoundPage/NotFoundPage'
import './App.scss'

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
					element: <CourseDetailsPage />,
				},
				{
					path: 'basket',
					element: <BasketPage />,
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
