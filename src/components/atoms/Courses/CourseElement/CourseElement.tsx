import { IconStarFilled, IconStarHalfFilled, IconStar } from '@tabler/icons-react'
import './CourseElement.scss'

interface CourseElementProps {
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

export const CourseElement = ({
	id,
	category,
	name,
	description,
	author,
	numberOfRating,
	rating,
	price,
	language,
	requirements,
	img,
}: CourseElementProps): JSX.Element => {
	return (
		<section className='course-element'>
			<div className='course-element__img--wrapper'>
				<img loading='lazy' className='course-element__img' src={img} alt={name} />
			</div>

			<div className='course-element__content'>
				<h3 className='course-element__name'>{name}</h3>
				<p className='course-element__description'>{description}</p>
				<span className='course-element__author'>{author}</span>

				<div className='course-element__rating-wrapper'>
					<span className='course-element__rating-number'>{rating}</span>

					<div className='course-element__rating'>
						{rating >= 1 ? (
							<IconStarFilled className='course-element__rating-star' size={18} stroke={3} />
						) : rating >= 0.5 ? (
							<IconStarHalfFilled className='course-element__rating-star' size={18} />
						) : (
							<IconStar className='course-element__rating-star' size={18} />
						)}
						{rating >= 2 ? (
							<IconStarFilled className='course-element__rating-star' size={18} />
						) : rating >= 1.5 ? (
							<IconStarHalfFilled className='course-element__rating-star' size={18} />
						) : (
							<IconStar className='course-element__rating-star' size={18} />
						)}
						{rating >= 3 ? (
							<IconStarFilled className='course-element__rating-star' size={18} />
						) : rating >= 2.5 ? (
							<IconStarHalfFilled className='course-element__rating-star' size={18} />
						) : (
							<IconStar className='course-element__rating-star' size={18} />
						)}
						{rating >= 4 ? (
							<IconStarFilled className='course-element__rating-star' size={18} />
						) : rating >= 3.5 ? (
							<IconStarHalfFilled className='course-element__rating-star' size={18} />
						) : (
							<IconStar className='course-element__rating-star' size={18} />
						)}
						{rating >= 5 ? (
							<IconStarFilled className='course-element__rating-star' size={18} />
						) : rating >= 4.5 ? (
							<IconStarHalfFilled className='course-element__rating-star' size={18} />
						) : (
							<IconStar className='course-element__rating-star' size={18} />
						)}
					</div>
					<span className='course-element__number-of-rantings'>{numberOfRating}</span>
				</div>
			</div>

			<span className='course-element__price'>${price}</span>
		</section>
	)
}
