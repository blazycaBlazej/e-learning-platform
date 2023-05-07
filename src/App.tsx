import HomePage from './pages/HomePage/HomePage'
import './App.scss'
import MainCourseViewPage from './pages/MainCourseViewPage/MainCourseViewPage'
import CourseElement from './components/atoms/Courses/CourseElement/CourseElement'
import CoursesViewOrganism from './components/organisms/CoursesViewOrganism/CoursesViewOrganism'
import CoursesViewPage from './pages/CoursesViewPage/CouresesViewPage'
import MenuSearchbar from './components/atoms/Menu/MenuSearchbar/MenuSearchbar'
import MenuItemAtom from './components/atoms/Menu/MenuItemAtom/MenuItemAtom'
import MenuLogoAtom from './components/atoms/Menu/MenuLogoAtom/MenuLogoAtom'
import MenuBasketAtom from './components/atoms/Menu/MenuBasketAtom/MenuBasketAtom'
import MenuOrganism from './components/organisms/MenuOrganism/MenuOrganism'

function App() {
	return (
		<div className='app'>
			<MainCourseViewPage />
			{/* <CoursesViewPage /> */}
			{/* <HeaderOrganism /> */}

			{/* <HomePage /> */}
		</div>
	)
}

export default App
