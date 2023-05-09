import { useEffect } from 'react'
import MainCourseHeader from '../../components/atoms/MainCourse/MainCourseHeader/MainCourseHeader'
import MainCourseOptionAtom from '../../components/atoms/MainCourse/MainCourseOptionAtom/MainCourseOptionAtom'

import MainCourseTopics from '../../components/atoms/MainCourse/MainCourseTopics/MainCourseTopics'
import MainCourseCompanies from '../../components/atoms/MainCourse/MainCourseCompanies/MainCourseCompanies'
import MainCourseRequirements from '../../components/atoms/MainCourse/MainCourseRequirements/MainCourseRequirements'
import MainCourseDescription from '../../components/atoms/MainCourse/MainCourseDescription/MainCourseDescription'
import MainCourseStickyHeader from '../../components/atoms/MainCourse/MainCourseStickyHeader/MainCourseStickyHeader'

import './CourseDetailsPage.scss'
const CourseDetailsPage = (): JSX.Element => {
	const rating = 5
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<main className='course-details-page'>
			<div className='course-details-page__sticky-header'>
				<MainCourseStickyHeader />
			</div>
			<div className='course-details-page__header-bgc'>
				<div className='course-details-page__header-wrapper'>
					<div className='course-details-page__header'>
						<MainCourseHeader />
					</div>
					<div className='course-details-page__option'>
						<MainCourseOptionAtom />
					</div>
				</div>
			</div>
			<div className='course-details-page__content'>
				<div className='course-details-page__left-side'>
					<MainCourseTopics />
					<MainCourseCompanies />
					<MainCourseRequirements />
					<MainCourseDescription />
				</div>
			</div>
		</main>
	)
}

export default CourseDetailsPage
