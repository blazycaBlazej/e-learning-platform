import { IconPlayerPlayFilled, IconStarFilled } from '@tabler/icons-react'
import './CourseAtom.scss'

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

const Course = ({ img, name, lessonsNumber, category, author, authorImg, dousuniecia, evaluation }: CourseProps) => {
	return (
		<div className='course-atom' data-aos='fade-up'>
			<div className='course-atom__image-cointainer'>
				<img src={img} alt={name} className='course-atom__image' />
			</div>

			<div className='course-atom__content'>
				<div className='course-atom__info-cointainer'>
					<div className='course-atom__lesson-cointainer'>
						<div className='course-atom__lesson-icon'>
							<IconPlayerPlayFilled size={13} />
						</div>
						<div className='course-atom__lesson'>{lessonsNumber}x Lesson</div>
					</div>

					<div className='course-atom__category'>{category}</div>
				</div>

				<p className='course-atom__name'>{name}</p>

				<div className='course-atom__author-cointainer'>
					<div className='course-atom__author'>
						<div className='course-atom__author-image'>
							<img src={authorImg} alt={author} />
						</div>
						<div className='course-atom__author-name-cointainer'>
							<span className='course-atom__author-name'>{author}</span>
							<span className='course-atom__author-prof'>{dousuniecia}</span>
						</div>
					</div>
					<div className='course-atom__students-number'>50+ Student</div>
				</div>

				<div className='course-atom__evaluation-cointainer'>
					<div className='course-atom__evaluation'>
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
					</div>
					<a href='#'>
						<span className='course-atom__enroll'>Enroll Now</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Course
