import './MainCourseRequirements.scss'

interface MainCourseRequirementsProps {
	requirements: string
}

export const MainCourseRequirements = ({ requirements }: MainCourseRequirementsProps): JSX.Element => {
	const requirementsArray = requirements.split(',')
	return (
		<section className='main-course-requirements'>
			<h2 className='main-course-requirements__header'>Requirements</h2>
			<ul className='main-course-requirements__list'>
				{requirementsArray.map((element, index) => (
					<li key={index} className='main-course-requirements__list-element'>
						{element}
					</li>
				))}
			</ul>
		</section>
	)
}
