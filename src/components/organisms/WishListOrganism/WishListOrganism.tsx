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
	type: string
}

interface LoaderData {
	data: CourseDetail[]
	type: string
}

const WishListOrganism = (): JSX.Element => {
	const courses: LoaderData = useLoaderData() as LoaderData
	return (
		<section className='wish-list-organism'>
			{<WishListHeaderAtom type={courses.type} />}
			<div className='wish-list-organism__wrapper'>
				{courses.data.length > 0 ? (
					courses.data.map((course: CourseDetail, index) => <WishListCourseAtom key={index} course={course} />)
				) : (
					<WishListEmptyAtom type={courses.type} />
				)}
			</div>
		</section>
	)
}

export default WishListOrganism
