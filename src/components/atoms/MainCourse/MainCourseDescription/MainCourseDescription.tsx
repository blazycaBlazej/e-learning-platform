import './MainCourseDescription.scss'

interface MainCourseDescriptionProps {
	description: string
}

export const MainCourseDescription = ({ description }: MainCourseDescriptionProps): JSX.Element => {
	return (
		<section className='main-course-description'>
			<h2 className='main-course-description__header'>Description</h2>
			<p className='main-course-description__description'>{description}</p>
		</section>
	)
}

