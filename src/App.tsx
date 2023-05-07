import HomePage from './pages/HomePage/HomePage'
import './App.scss'
import MainCourseViewPage from './pages/MainCourseViewPage/MainCourseViewPage'
import CourseElement from './components/atoms/Courses/CourseElement/CourseElement'
import CoursesViewOrganism from './components/organisms/CoursesViewOrganism/CoursesViewOrganism'
import CoursesViewPage from './pages/CoursesViewPage/CouresesViewPage'

function App() {
	return (
		<div className='app'>
			{/* <MainCourseViewPage /> */}
			<CoursesViewPage />

			{/* <HomePage /> */}
		</div>
	)
}

export default App
