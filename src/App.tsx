import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from '../src/store/index'
import HomePage from './pages/HomePage/HomePage'
import CourseDetailsPage from './pages/CourseDetailsPage/CourseDetailsPage'
import CoursesViewPage from './pages/CoursesViewPage/CoursesViewPage'
import MainLayout from './layouts/MainLayout'
import BasketPage from './pages/BasketPage/BasketPage'
import NotFound from './pages/NotFoundPage/NotFoundPage'
import { courses } from './data/courses'
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
					loader: () => {
						const data = courses.filter(el => el)

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

	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App
