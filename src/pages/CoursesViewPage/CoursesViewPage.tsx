import { useEffect, Suspense } from 'react'
import { Await, defer, useLoaderData, useLocation } from 'react-router-dom'
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

export default CoursesViewPage
