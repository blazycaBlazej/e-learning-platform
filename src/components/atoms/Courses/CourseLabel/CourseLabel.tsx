import './CourseLabel.scss'

interface CourseLabelProps {
	category: string
}

export const CourseLabel = ({ category }: CourseLabelProps): JSX.Element => {
	return <h1 className='course-label'>{category}</h1>
}


