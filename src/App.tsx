import HomePage from './pages/HomePage/HomePage'
import './App.scss'
import MainCourseViewPage from './pages/MainCourseViewPage/MainCourseViewPage'
import CourseElement from './components/atoms/Courses/CourseElement/CourseElement'
import CoursesViewOrganism from './components/organisms/CoursesViewOrganism/CoursesViewOrganism'
import CoursesViewPage from './pages/CoursesViewPage/CouresesViewPage'
import MenuSearchbar from './components/atoms/Menu/MenuSearchbar/MenuSearchbar'

function App() {
	return (
		<div className='app'>
			{/* <MainCourseViewPage /> */}
			{/* <CoursesViewPage /> */}
			{/* <HeaderOrganism /> */}

			{/* <HomePage /> */}
			<MenuSearchbar />
		</div>
	)
}

export default App
