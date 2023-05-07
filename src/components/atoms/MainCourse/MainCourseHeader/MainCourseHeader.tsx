import { IconStarFilled, IconStarHalfFilled, IconStar, IconWorld, IconRefresh, IconUser } from '@tabler/icons-react'

import './MainCourseHeader.scss'

const MainCourseHeader = (): JSX.Element => {
	const rating = 5
	return (
		<section className='main-course-header'>
			<span className='main-course-header__category'>Projektowanie</span>
			<h1 className='main-course-header__name'>The Ultimate Drawing Course - Beginner to Advanced</h1>
			<p className='main-course-header__description'>
				Learn the #1 most important building block of all art, Drawing. This course will teach you how to draw like a
				pro!
			</p>
			<div className='main-course-header__rating-wrapper'>
				<span className='main-course-header__rating-number'>5.0</span>

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
				<span className='main-course-header__number-of-rantings'>(1 ratings)</span>
				<span className='main-course-view-students'>1 students</span>
			</div>
			<span className='main-course-header__creator'>
				<IconUser size={20} />
				Created by: Jan Kowalski
			</span>
			<span className='main-course-header__last-update'>
				<IconRefresh size={20} />
				Last updated 03.2022
			</span>
			<span className='main-course-header__language'>
				<IconWorld size={20} />
				English
			</span>
		</section>
	)
}

export default MainCourseHeader
