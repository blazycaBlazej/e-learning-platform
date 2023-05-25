import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'

import {
	MainCourseTopics,
	MainCourseCompanies,
	MainCourseRequirements,
	MainCourseDescription,
	MainCourseStickyHeader,
	MainCourseOptionAtom,
	MainCourseHeader,
} from '../../components/atoms'

import './CourseDetailsPage.scss'

interface courseDetail {
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

export const CourseDetailsPage = (): JSX.Element => {
	const courseDetail: courseDetail[] = useLoaderData() as courseDetail[]
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<main className='course-details-page'>
			<div className='course-details-page__sticky-header'>
				<MainCourseStickyHeader
					name={courseDetail[0].name}
					rating={courseDetail[0].rating}
					numberOfRating={courseDetail[0].numberOfRating}
					img={courseDetail[0].img}
				/>
			</div>
			<div className='course-details-page__header-bgc'>
				<div className='course-details-page__header-wrapper'>
					<div className='course-details-page__header'>
						<MainCourseHeader
							name={courseDetail[0].name}
							description={courseDetail[0].description}
							rating={courseDetail[0].rating}
							language={courseDetail[0].language}
							numberOfRating={courseDetail[0].numberOfRating}
							author={courseDetail[0].author}
							category={courseDetail[0].category}
						/>
					</div>
					<div className='course-details-page__option'>
						<MainCourseOptionAtom
							id={courseDetail[0].id}
							price={courseDetail[0].price}
							img={courseDetail[0].img}
							name={courseDetail[0].name}
						/>
					</div>
				</div>
			</div>
			<div className='course-details-page__content'>
				<div className='course-details-page__left-side'>
					<MainCourseTopics />
					<MainCourseCompanies />
					<MainCourseRequirements requirements={courseDetail[0].requirements} />
					<MainCourseDescription description={courseDetail[0].description} />
				</div>
			</div>
		</main>
	)
}

export default CourseDetailsPage
