import { Link } from 'react-router-dom'
import CourseElement from '../../atoms/Courses/CourseElement/CourseElement'
import CourseLabel from '../../atoms/Courses/CourseLabel/CourseLabel'
import CourseMoneyBack from '../../atoms/Courses/CourseMoneyBack/CourseMoneyBack'
import './CoursesViewOrganism.scss'

const CoursesViewOrganism = (): JSX.Element => {
	return (
		<section className='courses-view-organism'>
			<div className='courses-view-organism__label'>
				<CourseLabel category='Development' />
			</div>
			<div className='courses-view-organism__money-back'>
				<CourseMoneyBack />
			</div>
			<Link to='/courses/xd'>
				<CourseElement />
			</Link>
			<Link to='/courses/xd'>
				<CourseElement />
			</Link>
			<Link to='/courses/xd'>
				<CourseElement />
			</Link>
			<Link to='/courses/xd'>
				<CourseElement />
			</Link>
			<Link to='/courses/xd'>
				<CourseElement />
			</Link>
			<Link to='/courses/xd'>
				<CourseElement />
			</Link>
		</section>
	)
}

export default CoursesViewOrganism
