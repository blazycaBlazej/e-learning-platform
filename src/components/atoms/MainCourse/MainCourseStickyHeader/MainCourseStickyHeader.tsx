import { IconStarFilled } from '@tabler/icons-react'
import './MainCourseStickyHeader.scss'

const MainCourseStickyHeader = (): JSX.Element => {
	return (
		<section className='main-course-sticky-header'>
			<span className='main-course-sticky-header__name'>
				NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
			</span>
			<div className='main-course-sticky-header__info'>
				<span className='main-course-sticky-header__rating'>
					4,6 <IconStarFilled size={18} />
				</span>

				<span className='main-course-sticky-header__ratings'>40 866 ratings</span>
				<span className='main-course-sticky-header__students'>213,324 students</span>
			</div>
		</section>
	)
}

export default MainCourseStickyHeader
