import HeaderOrganism from '../../components/organisms/HeaderOrganism/HeaderOrganism'
import MainCourseHeader from '../../components/atoms/MainCourse/MainCourseHeader/MainCourseHeader'
import MainCourseOptionAtom from '../../components/atoms/MainCourse/MainCourseOptionAtom/MainCourseOptionAtom'

import './MainCourseViewPage.scss'
import MainCourseTopics from '../../components/atoms/MainCourse/MainCourseTopics/MainCourseTopics'
import MainCourseCompanies from '../../components/atoms/MainCourse/MainCourseCompanies/MainCourseCompanies'
import MainCourseRequirements from '../../components/atoms/MainCourse/MainCourseRequirements/MainCourseRequirements'
import MainCourseDescription from '../../components/atoms/MainCourse/MainCourseDescription/MainCourseDescription'
import MainCourseStickyHeader from '../../components/atoms/MainCourse/MainCourseStickyHeader/MainCourseStickyHeader'
const MainCourseViewPage = (): JSX.Element => {
	const rating = 5
	return (
		<>
			{/* <HeaderOrganism /> */}
			<div className='main-course-view-page'>
				<div className='main-course-view-page__sticky-header'>
					<MainCourseStickyHeader />
				</div>
				<div
					className='main-course-view-page__header
			'>
					<div className='main-course-view-page__header-content'>
						<div className='main-course-view-page__wrapper'>
							<MainCourseHeader />
						</div>
						<div className='main-course-view-page__options'>
							<MainCourseOptionAtom />
						</div>
					</div>
				</div>

				<div className='main-course-view-page__content-cointainer'>
					<div className='main-course-view-page__content'>
						<MainCourseTopics />
						<MainCourseCompanies />
						<MainCourseRequirements />
						<MainCourseDescription />
					</div>
				</div>
			</div>
		</>
	)
}

export default MainCourseViewPage
