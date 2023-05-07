import { IconStarFilled, IconStarHalfFilled, IconStar } from '@tabler/icons-react'
import './CourseElement.scss'

interface CourseElementProps {
	name: string
	description: string
	author: string
	rating: number
	numberOfRating: number
	price: number
}

const CourseElement = (): JSX.Element => {
	const rating = 5
	return (
		<section className='course-element'>
			<div className='course-element__img'></div>

			<div className='course-element__content'>
				<h3 className='course-element__name'>Java od Podstaw do Eksperta - twórz własne aplikacje</h3>
				<p className='course-element__description'>
					Stworzony z myślą o osobach, które nie wiedzą nic na temat programowania w Java. Stań się ekspertem w Javie
					już dziś!
				</p>
				<span className='course-element__author'>Arkadiusz Włodarczyk</span>

				<div className='course-element__rating-wrapper'>
					<span className='course-element__rating-number'>5.0</span>

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
					<span className='course-element__number-of-rantings'>(1)</span>
				</div>
			</div>

			<span className='course-element__price'>239,99 zł</span>
		</section>
	)
}

export default CourseElement
