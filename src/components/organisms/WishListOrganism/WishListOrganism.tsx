import { useLoaderData } from 'react-router-dom'
import { WishListCourseAtom, WishListEmptyAtom, WishListHeaderAtom } from '../../atoms'
import './WishListOrganism.scss'

interface CourseDetail {
	id: number
	category: string
	name: string
	description: string
	author: string
	numberOfRating: number
	rating: number
	price: number
	language: string
	requirements: string
	img: string
	type: string
}

interface LoaderData {
	data: CourseDetail[]
	type: string
}

export const WishListOrganism = (): JSX.Element => {
	const courses: LoaderData = useLoaderData() as LoaderData
	return (
		<section className='wish-list-organism'>
			{<WishListHeaderAtom type={courses.type} />}
			<div className='wish-list-organism__wrapper'>
				{courses.data.length > 0 ? (
					courses.data.map((course: CourseDetail, index) => (
						<WishListCourseAtom key={index} course={course} type={courses.type} />
					))
				) : (
					<WishListEmptyAtom type={courses.type} />
				)}
			</div>
		</section>
	)
}
