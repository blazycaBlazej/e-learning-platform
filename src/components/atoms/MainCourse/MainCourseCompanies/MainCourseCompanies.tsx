import './MainCourseCompanies.scss'

export const MainCourseCompanies = (): JSX.Element => {
	return (
		<section className='main-course-companies'>
			<span className='main-course-companies__header'>Top companies offer this course to their employees</span>
			<p className='main-course-companies__description'>
				This course was selected for our collection of top-rated courses trusted by businesses worldwide. Learn more
			</p>
			<div className='main-course-companies__companies'>
				<img
					loading='lazy'
					alt='Nasdaq'
					src='https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg'
					width='115'
					height='38'
				/>
				<img
					loading='lazy'
					alt='Volkswagen'
					src='https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg'
					width='44'
					height='38'
				/>
				<img
					loading='lazy'
					alt='Box'
					src='https://s.udemycdn.com/partner-logos/v4/box-dark.svg'
					width='67'
					height='38'
				/>
				<img
					loading='lazy'
					alt='NetApp'
					src='https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg'
					width='115'
					height='38'
				/>
				<img
					loading='lazy'
					alt='Eventbrite'
					src='https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg'
					width='115'
					height='38'
				/>
			</div>
		</section>
	)
}


