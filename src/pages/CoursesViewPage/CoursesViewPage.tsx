import { useEffect } from 'react'
import { CoursesViewOrganism } from '../../components/organisms'
import './CoursesViewPage.scss'

export const CoursesViewPage = (): JSX.Element => {
	useEffect(() => window.scrollTo(0, 0), [])

	return (
		<main className='courses-view-page'>
			<CoursesViewOrganism />
		</main>
	)
}
