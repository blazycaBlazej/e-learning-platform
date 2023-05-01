import { IconPlayerPlayFilled, IconStarFilled } from '@tabler/icons-react'
import './Course.scss'

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
		<div className='course'>
			<div className='course__image-cointainer'>
				<img src={img} alt='name' className='course__image' />
			</div>

			<div className='course__content'>
				<div className='course__info-cointainer'>
					<div className='course__lesson-cointainer'>
						<div className='course__lesson-icon'>
							<IconPlayerPlayFilled size={13} />
						</div>
						<div className='course__lesson'>{lessonsNumber}x Lesson</div>
					</div>

					<div className='course__category'>{category}</div>
				</div>

				<p className='course__name'>{name}</p>

				<div className='course__author-cointainer'>
					<div className='course__author'>
						<div className='course__author-image'>
							<img src={authorImg} alt={author} />
						</div>
						<div className='course__author-name-cointainer'>
							<span className='course__author-name'>{author}</span>
							<span className='course__author-prof'>{dousuniecia}</span>
						</div>
					</div>
					<div className='course__students-number'>50+ Student</div>
				</div>

				<div className='course__evaluation-cointainer'>
					<div className='course__evaluation'>
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
						<IconStarFilled size='17' />
					</div>
					<a href='#'>
						<span className='course__enroll'>Enroll Now</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Course
