import MainCourseHeader from '../../components/atoms/MainCourse/MainCourseHeader/MainCourseHeader'
import MainCourseOptionAtom from '../../components/atoms/MainCourse/MainCourseOptionAtom/MainCourseOptionAtom'

import './MainCourseViewPage.scss'
import MainCourseTopics from '../../components/atoms/MainCourse/MainCourseTopics/MainCourseTopics'
import MainCourseCompanies from '../../components/atoms/MainCourse/MainCourseCompanies/MainCourseCompanies'
import MainCourseRequirements from '../../components/atoms/MainCourse/MainCourseRequirements/MainCourseRequirements'
import MainCourseDescription from '../../components/atoms/MainCourse/MainCourseDescription/MainCourseDescription'
import MainCourseStickyHeader from '../../components/atoms/MainCourse/MainCourseStickyHeader/MainCourseStickyHeader'
import MenuOrganism from '../../components/organisms/MenuOrganism/MenuOrganism'
const MainCourseViewPage = (): JSX.Element => {
	const rating = 5
	return (
		<>
			<MenuOrganism />
			<section className='main-course-view-page'>
				<div className='main-course-view-page__sticky-header'>
					<MainCourseStickyHeader />
				</div>
				<div className='main-course-view-page__header-bgc'>
					<div className='main-course-view-page__header-wrapper'>
						<div className='main-course-view-page__header'>
							<MainCourseHeader />
						</div>
						<div className='main-course-view-page__option'>
							<MainCourseOptionAtom />
						</div>
					</div>
				</div>
				<div className='main-course-view-page__content'>
					<div className='main-course-view-page__left-side'>
						<MainCourseTopics />
						<MainCourseCompanies />
						<MainCourseRequirements />
						<MainCourseDescription />
					</div>
				</div>
			</section>
		</>
	)
}

export default MainCourseViewPage
