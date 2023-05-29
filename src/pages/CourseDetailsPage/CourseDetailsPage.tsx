import { useLoaderData, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
import { RotatingLines } from 'react-loader-spinner'

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
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [courseDetail, setCourseDetail] = useState<courseDetail | undefined>()
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		console.log(location)
		const urlArray = location.pathname.split('/')
		setIsLoading(true)

		const getCourses = async () => {
			try {
				const response = await fetch(`https://test-fb3k.onrender.com/courses/${urlArray[2]}`, {
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
					},
				})
				const data = await response.json()

				const [course] = data
				setCourseDetail(course)
				setIsLoading(false)
			} catch {}
		}
		getCourses()
	}, [])

	return (
		<main className='course-details-page'>
			{isLoading ? (
				<div className='course-details-page__loader'>
					<RotatingLines strokeColor='grey' strokeWidth='5' animationDuration='0.75' width='144' visible={true} />{' '}
				</div>
			) : (
				courseDetail && (
					<>
						<div className='course-details-page__sticky-header'>
							<MainCourseStickyHeader
								name={courseDetail.name}
								rating={courseDetail.rating}
								numberOfRating={courseDetail.numberOfRating}
								img={courseDetail.img}
							/>
						</div>
						<div className='course-details-page__header-bgc'>
							<div className='course-details-page__header-wrapper'>
								<div className='course-details-page__header'>
									<MainCourseHeader
										name={courseDetail.name}
										description={courseDetail!.description}
										rating={courseDetail.rating}
										language={courseDetail.language}
										numberOfRating={courseDetail.numberOfRating}
										author={courseDetail.author}
										category={courseDetail.category}
									/>
								</div>
								<div className='course-details-page__option'>
									<MainCourseOptionAtom
										id={courseDetail.id}
										price={courseDetail.price}
										img={courseDetail.img}
										name={courseDetail.name}
									/>
								</div>
							</div>
						</div>
						<div className='course-details-page__content'>
							<div className='course-details-page__left-side'>
								<MainCourseTopics />
								<MainCourseCompanies />
								<MainCourseRequirements requirements={courseDetail.requirements} />
								<MainCourseDescription description={courseDetail.description} />
							</div>
						</div>
					</>
				)
			)}
		</main>
	)
}

export default CourseDetailsPage
