import './MainCourseRequirements.scss'

const MainCourseRequirements = (): JSX.Element => {
	const requirements = [
		'No programming experience is required.',
		'Downloading and installing Python is covered at the start of the course.',
		'Basic computer skills: surfing websites, running programs, saving and opening documents, etc.',
	]

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
