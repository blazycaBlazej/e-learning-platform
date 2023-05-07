import { IconPlayerPlayFilled, IconStarFilled } from '@tabler/icons-react'
import './CourseHomePageAtom.scss'

interface CourseProps {
	img: string
	name: string
	lessonsNumber: number
	category: string
	author: string
	authorImg: string
	dousuniecia: string
	evaluation: number
}

const CourseHomePageAtom = ({
	img,
	name,
	lessonsNumber,
	category,
	author,
	authorImg,
	dousuniecia,
	evaluation,
}: CourseProps) => {
	return (
		<div className='course-atom-home-page' data-aos='fade-up'>
			<div className='course-atom-home-page__image-cointainer'>
				<img src={img} alt={name} className='course-atom-home-page__image' />
			</div>

			<div className='course-atom-home-page__content'>
				<div className='course-atom-home-page__info-cointainer'>
					<div className='course-atom-home-page__lesson-cointainer'>
						<div className='course-atom-home-page__lesson-icon'>
							<IconPlayerPlayFilled size={13} />
						</div>
						<div className='course-atom-home-page__lesson'>{lessonsNumber}x Lesson</div>
					</div>

					<div className='course-atom-home-page__category'>{category}</div>
				</div>

				<p className='course-atom-home-page__name'>{name}</p>

				<div className='course-atom-home-page__author-cointainer'>
					<div className='course-atom-home-page__author'>
						<div className='course-atom-home-page__author-image'>
							<img src={authorImg} alt={author} />
						</div>
						<div className='course-atom-home-page__author-name-cointainer'>
							<span className='course-atom-home-page__author-name'>{author}</span>
							<span className='course-atom-home-page__author-prof'>{dousuniecia}</span>
						</div>
					</div>
					<div className='course-atom-home-page__students-number'>50+ Student</div>
				</div>

				<div className='course-atom-home-page__evaluation-cointainer'>
					<div className='course-atom-home-page__evaluation'>
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
					</div>
					<a href='#'>
						<span className='course-atom-home-page__enroll'>Enroll Now</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default CourseHomePageAtom
