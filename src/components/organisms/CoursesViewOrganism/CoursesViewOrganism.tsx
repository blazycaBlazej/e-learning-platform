import { Link, useLoaderData, Location } from 'react-router-dom'
import {CourseElement} from '../../atoms/Courses/CourseElement/CourseElement'
import {CourseLabel} from '../../atoms/Courses/CourseLabel/CourseLabel'
import {CourseMoneyBack} from '../../atoms/Courses/CourseMoneyBack/CourseMoneyBack'
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
	img: string
}

export const CoursesViewOrganism = (): JSX.Element => {
	const courses: Course[] = useLoaderData() as Course[]
	let header = ''
	const splitLocation = location.pathname.split('/')
	const searchTerm = splitLocation[splitLocation.length - 1]

	if (location.pathname.includes('search')) {
		header = `${courses.length} results for "${searchTerm}"`
	} else if (location.pathname.includes('/courses/')) {
		header = `${courses[0].category} Courses`
	} else {
		header = `All Courses`
	}

	return (
		<section className='courses-view-organism'>
			<div className='courses-view-organism__label'>
				<CourseLabel category={header} />
			</div>
			<div className='courses-view-organism__money-back'>
				<CourseMoneyBack />
			</div>

			{courses.map((el, index) => (
				<Link key={index} to={`/courses/${el.id}`}>
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


