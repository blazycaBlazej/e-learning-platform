import { useLoaderData } from 'react-router-dom'
import WishListCourseAtom from '../../atoms/WishList/WishListCourseAtom/WishListCourseAtom'
import WishListHeaderAtom from '../../atoms/WishList/WishListHeaderAtom/WishListHeaderAtom'
import './WishListOrganism.scss'
import WishListEmptyAtom from '../../atoms/WishList/WishListEmptyAtom/WishListEmptyAtom'

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
}

const WishListOrganism = (): JSX.Element => {
	const courses: CourseDetail[] = useLoaderData() as CourseDetail[]

	return (
		<section className='wish-list-organism'>
			<WishListHeaderAtom />
			<div className='wish-list-organism__wrapper'>
				{courses.length > 0 ? (
					courses.map((course: CourseDetail, index) => <WishListCourseAtom key={index} course={course} />)
				) : (
					<WishListEmptyAtom />
				)}
			</div>
		</section>
	)
}

export default WishListOrganism
