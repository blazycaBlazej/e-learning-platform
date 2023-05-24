import { CreateCourseOrganism } from '../../components/organisms/CreateCourseOrganism/CreateCourseOrganism'
import './CreateCoursePage.scss'

export const CreateCoursePage = (): JSX.Element => {
	return (
		<section className='create-course-page'>
			<CreateCourseOrganism />
		</section>
	)
}
