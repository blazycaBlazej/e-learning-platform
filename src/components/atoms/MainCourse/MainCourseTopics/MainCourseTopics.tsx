import { IconCheck } from '@tabler/icons-react'
import './MainCourseTopics.scss'
const MainCourseTopics = (): JSX.Element => {
	const topics = [
		'Draw objects out of your head',
		'Understand the fundamentals of art',
		'Draw the human face and figure',
		'Draw realistic light and shadow',
		'Draw perspective drawings',
	]
	return (
		<section
			className='main-course-topics
     '>
			<h2 className='main-course-topics__header'>What you'll learn</h2>
			<ul className='main-course-topics__list'>
				{topics.map(el => (
					<>
						<li className='main-course-topics__list-element'>
							<IconCheck size={18} />
							{el}
						</li>
					</>
				))}
			</ul>
		</section>
	)
}

export default MainCourseTopics
