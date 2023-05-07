import { IconInfoSmall } from '@tabler/icons-react'
import './CourseMoneyBack.scss'

const CourseMoneyBack = (): JSX.Element => {
	return (
		<section className='course-money-back'>
			<div className='course-money-back__cirlce'>
				<IconInfoSmall size={32} />
			</div>

			<h2 className='course-money-back__header'>Not sure? All courses have a 30-day money-back guarantee</h2>
		</section>
	)
}

export default CourseMoneyBack
