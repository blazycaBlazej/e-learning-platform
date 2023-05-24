import { IconStarFilled, IconStarHalfFilled, IconStar, IconWorld, IconRefresh, IconUser } from '@tabler/icons-react'

import './MainCourseHeader.scss'

interface MainCourseHeaderProps {
	name: string
	description: string
	rating: number
	language: string
	numberOfRating: number
	author: string
	category: string
}

export const MainCourseHeader = ({
	name,
	description,
	rating,
	language,
	numberOfRating,
	author,
	category,
}: MainCourseHeaderProps): JSX.Element => {
	return (
		<section className='main-course-header'>
			<span className='main-course-header__category'>{category}</span>
			<h1 className='main-course-header__name'>{name}</h1>
			<p className='main-course-header__description'>{description}</p>
			<div className='main-course-header__rating-wrapper'>
				<span className='main-course-header__rating-number'>{rating}</span>

				<div className='main-course-header__rating'>
					{rating >= 1 ? (
						<IconStarFilled className='main-course-header__rating-star' size={18} stroke={3} />
					) : rating >= 0.5 ? (
						<IconStarHalfFilled className='main-course-header__rating-star' size={18} />
					) : (
						<IconStar className='main-course-header__rating-star' size={18} />
					)}
					{rating >= 2 ? (
						<IconStarFilled className='main-course-header__rating-star' size={18} />
					) : rating >= 1.5 ? (
						<IconStarHalfFilled className='main-course-header__rating-star' size={18} />
					) : (
						<IconStar className='main-course-header__rating-star' size={18} />
					)}
					{rating >= 3 ? (
						<IconStarFilled className='main-course-header__rating-star' size={18} />
					) : rating >= 2.5 ? (
						<IconStarHalfFilled className='main-course-header__rating-star' size={18} />
					) : (
						<IconStar className='main-course-header__rating-star' size={18} />
					)}
					{rating >= 4 ? (
						<IconStarFilled className='main-course-header__rating-star' size={18} />
					) : rating >= 3.5 ? (
						<IconStarHalfFilled className='main-course-header__rating-star' size={18} />
					) : (
						<IconStar className='main-course-header__rating-star' size={18} />
					)}
					{rating >= 5 ? (
						<IconStarFilled className='main-course-header__rating-star' size={18} />
					) : rating >= 4.5 ? (
						<IconStarHalfFilled className='main-course-header__rating-star' size={18} />
					) : (
						<IconStar className='main-course-header__rating-star' size={18} />
					)}
				</div>
				<span className='main-course-header__number-of-rantings'>({numberOfRating} ratings)</span>
				<span className='main-course-view-students'>{numberOfRating} students</span>
			</div>
			<span className='main-course-header__creator'>
				<IconUser size={20} />
				Created by: {author}
			</span>
			<span className='main-course-header__last-update'>
				<IconRefresh size={20} />
				Last updated 03.2022
			</span>
			<span className='main-course-header__language'>
				<IconWorld size={20} />
				{language}
			</span>
		</section>
	)
}

