import { IconStarFilled } from '@tabler/icons-react'
import './MainCourseStickyHeader.scss'

interface MainCourseStickyHeaderProps {
	// id: number
	name: string
	numberOfRating: number
	rating: number

	img: string
}

export const MainCourseStickyHeader = ({ name, numberOfRating, rating, img }: MainCourseStickyHeaderProps): JSX.Element => {
	return (
		<section className='main-course-sticky-header'>
			<span className='main-course-sticky-header__name'>{name}</span>
			<div className='main-course-sticky-header__info'>
				<span className='main-course-sticky-header__rating'>
					{rating} <IconStarFilled size={18} />
				</span>

				<span className='main-course-sticky-header__ratings'>{numberOfRating} ratings</span>
				<span className='main-course-sticky-header__students'>{numberOfRating} students</span>
			</div>
		</section>
	)
}

