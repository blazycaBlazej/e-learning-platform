import { useLoaderData } from 'react-router-dom'
import CoursesViewOrganism from '../../components/organisms/CoursesViewOrganism/CoursesViewOrganism'
import './CoursesViewPage.scss'

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

const CoursesViewPage = (): JSX.Element => {
	const courses: Course[] = useLoaderData() as Course[]

	return (
		<main className='courses-view-page'>
			<CoursesViewOrganism courses={courses} />
		</main>
	)
}

export default CoursesViewPage
