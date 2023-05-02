import './FiltrCourseAtom.scss'

const FiltrCourseAtom = (): JSX.Element => {
	return (
		<div className='filtr-course-atom'>
			<div className='filtr-course-atom__element filtr-course-atom__element--active'>Design</div>
			<div className='filtr-course-atom__element'>Development</div>
			<div className='filtr-course-atom__element'>Business</div>
			<div className='filtr-course-atom__element'>Data Science</div>
			<div className='filtr-course-atom__element '>Markteting</div>

               
		</div>
	)
}

export default FiltrCourseAtom
