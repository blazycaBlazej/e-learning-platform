import './MainCourseRequirements.scss'

interface MainCourseRequirementsProps {
	requirements: string[]
}

const MainCourseRequirements = ({ requirements }: MainCourseRequirementsProps): JSX.Element => {
	console.log(requirements)
	return (
		<section className='main-course-requirements'>
			<h2 className='main-course-requirements__header'>Requirements</h2>
			<ul className='main-course-requirements__list'>
				{requirements.map(element => (
					<li className='main-course-requirements__list-element'>{element}</li>
				))}
			</ul>
		</section>
	)
}

export default MainCourseRequirements
