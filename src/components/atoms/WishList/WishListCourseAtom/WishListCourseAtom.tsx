import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'
import './WishListElementAtom.scss'
import { Link } from 'react-router-dom'

interface WishListCourseAtomProps {
	course: {
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
	type: string
}

export const WishListCourseAtom = ({ course, type }: WishListCourseAtomProps): JSX.Element => {
	const { id, category, name, description, author, numberOfRating, rating, price, language, requirements, img } = course

	return (
		<Link to={`/courses/${id}`}>
			<section className='wish-list-course-atom'>
				<div className='wish-list-course-atom__img-wrapper'>
					<img src={img} alt='' className='wish-list-course-atom__img' />
				</div>
				<div className='wish-list-course-atom__content'>
					<h3 className='wish-list-course-atom__name'>{name}</h3>

					<span className='wish-list-course-atom__author'>{author}</span>

					<div className='wish-list-course-atom__rating-wrapper'>
						<span className='wish-list-course-atom__rating-number'>{rating}</span>

						<div className='wish-list-course-atom__rating'>
							{rating >= 1 ? (
								<IconStarFilled className='wish-list-course-atom__rating-star' size={18} stroke={3} />
							) : rating >= 0.5 ? (
								<IconStarHalfFilled className='wish-list-course-atom__rating-star' size={18} />
							) : (
								<IconStar className='wish-list-course-atom__rating-star' size={18} />
							)}
							{rating >= 2 ? (
								<IconStarFilled className='wish-list-course-atom__rating-star' size={18} />
							) : rating >= 1.5 ? (
								<IconStarHalfFilled className='wish-list-course-atom__rating-star' size={18} />
							) : (
								<IconStar className='wish-list-course-atom__rating-star' size={18} />
							)}
							{rating >= 3 ? (
								<IconStarFilled className='wish-list-course-atom__rating-star' size={18} />
							) : rating >= 2.5 ? (
								<IconStarHalfFilled className='wish-list-course-atom__rating-star' size={18} />
							) : (
								<IconStar className='wish-list-course-atom__rating-star' size={18} />
							)}
							{rating >= 4 ? (
								<IconStarFilled className='wish-list-course-atom__rating-star' size={18} />
							) : rating >= 3.5 ? (
								<IconStarHalfFilled className='wish-list-course-atom__rating-star' size={18} />
							) : (
								<IconStar className='wish-list-course-atom__rating-star' size={18} />
							)}
							{rating >= 5 ? (
								<IconStarFilled className='wish-list-course-atom__rating-star' size={18} />
							) : rating >= 4.5 ? (
								<IconStarHalfFilled className='wish-list-course-atom__rating-star' size={18} />
							) : (
								<IconStar className='wish-list-course-atom__rating-star' size={18} />
							)}
						</div>
						<span className='wish-list-course-atom__number-of-rantings'>({numberOfRating})</span>
					</div>
					{type === 'wishlist' ? <span className='wish-list-course-atom__price'>${price}</span> : null}
				</div>
			</section>
		</Link>
	)
}
