import { Link } from 'react-router-dom'
import CourseElement from '../../atoms/Courses/CourseElement/CourseElement'
import CourseLabel from '../../atoms/Courses/CourseLabel/CourseLabel'
import CourseMoneyBack from '../../atoms/Courses/CourseMoneyBack/CourseMoneyBack'
import './CoursesViewOrganism.scss'

interface Course {
	id: number
	category: string
	name: string
	description: string
	author: string
	numberOfRating: number
	rating: number
	price: number
	language: string
	requirements: string[]
	img?: string
}

interface CoursesViewOrganismProps {
	courses: Course[]
}

const CoursesViewOrganism = ({ courses }: CoursesViewOrganismProps): JSX.Element => {
	console.log(courses)
	return (
		<section className='courses-view-organism'>
			<div className='courses-view-organism__label'>
				<CourseLabel category='Development' />
			</div>
			<div className='courses-view-organism__money-back'>
				<CourseMoneyBack />
			</div>

			{courses.map(el => (
				<Link to='/courses/xd'>
					<CourseElement
						key={el.id}
						id={el.id}
						category={el.category}
						name={el.name}
						description={el.description}
						author={el.author}
						numberOfRating={el.numberOfRating}
						rating={el.rating}
						price={el.price}
						language={el.language}
						requirements={el.requirements}
						img={el.img}
					/>
				</Link>
			))}
		</section>
	)
}

export default CoursesViewOrganism
