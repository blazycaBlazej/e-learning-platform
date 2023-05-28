import { useEffect, useState } from 'react'
import { CourseElement, CourseLabel, CourseMoneyBack } from '../../atoms'

import './CoursesViewOrganism.scss'
import { Link, useLocation } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

interface Course {
	id: number
	category: string
	name: string
	description: string
	author: string
	numberOfRating: number
	rating: number
	price: number
	language: string
	requirements: string[]
	img: string
}

export const CoursesViewOrganism = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [courses, setCourses] = useState<Course[]>([])
	const location = useLocation()
	let header = ''
	const splitLocation = location.pathname.split('/')
	const searchTerm = splitLocation[splitLocation.length - 1]
	const urlArray = location.pathname.split('/')

	if (location.pathname.includes('search')) {
		header = `${courses.length} results for "${searchTerm}"`
	} else if (location.pathname.includes('/courses/')) {
		header = `${urlArray[2]} courses`
	} else {
		header = `All Courses`
	}

	useEffect(() => {
		setIsLoading(true)
		console.log(location.pathname)
		if (location.pathname === '/courses') {
			const getCourses = async () => {
				const response = await fetch('http://127.0.0.1:3001/courses', {
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
					},
				})
				const data = await response.json()
				setCourses(data)
				setIsLoading(false)
			}
			getCourses()
		} else if (location.pathname.includes('/courses/search/')) {
			const getCourses = async () => {
				const response = await fetch(`http://127.0.0.1:3001/courses/search/${urlArray[3]}`, {
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
					},
				})
				const data = await response.json()
				setCourses(data)
				setIsLoading(false)
			}
			getCourses()
		} else {
			const getCourses = async () => {
				const response = await fetch(`http://127.0.0.1:3001/courses?category=${urlArray[2]}`, {
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
					},
				})
				const data = await response.json()
				setCourses(data)
				setIsLoading(false)
			}
			getCourses()
		}
	}, [location])

	return (
		<section className='courses-view-organism'>
			<div className='courses-view-organism__label'>
				<CourseLabel category={header} />{' '}
			</div>
			<div className='courses-view-organism__money-back'>
				<CourseMoneyBack />
			</div>

			{isLoading ? (
				<div className='courses-view-organism__loader'>
					<RotatingLines strokeColor='grey' strokeWidth='5' animationDuration='0.75' width='144' visible={true} />{' '}
				</div>
			) : courses.length === 0 ? (
				<p>brak wynikow</p>
			) : (
				courses.map((el: Course, index: number) => (
					<Link key={index} to={`/courses/${el.id}`}>
						<CourseElement course={el} />
					</Link>
				))
			)}
		</section>
	)
}
