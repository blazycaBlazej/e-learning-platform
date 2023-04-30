import './MainSection.scss'
import Searchbar from '../../atoms/Searchbar/Searchbar'

const MainSection = (): JSX.Element => {
	return (
		<section className='main-section'>
			<div className='main-section__content'>
				<h1 className='main-section__header'>
					<span className='main-section__header--violet'>Best courses </span>
					are waiting to enrich your skill
					<div className='main-section__crosses-wrapper'>
						<div className='main-section__crosses'>
							<svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M22.5472 33.066V26.5464C22.5472 24.3244 24.331 22.541 26.5536 22.541H33.0749C35.2974 22.541 37.0814 20.7576 37.0814 18.5357C37.0814 16.3138 35.2974 14.5303 33.0749 14.5303H26.5536C24.331 14.5303 22.5472 12.7469 22.5472 10.525V4.00535C22.5472 1.7834 20.7632 0 18.5407 0C16.3181 0 14.5342 1.7834 14.5342 4.00535V10.525C14.5342 12.7469 12.7504 14.5303 10.5278 14.5303H4.0065C1.78396 14.5303 0 16.3138 0 18.5357C0 20.7576 1.78396 22.541 4.0065 22.541H10.5278C12.7504 22.541 14.5342 24.3244 14.5342 26.5464V33.066C14.5342 35.288 16.3181 37.0714 18.5407 37.0714C20.7632 37.0714 22.5472 35.288 22.5472 33.066Z'
									fill='#FF5156'
									fill-opacity='0.5'
								/>
							</svg>
							<svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M22.5472 33.066V26.5464C22.5472 24.3244 24.331 22.541 26.5536 22.541H33.0749C35.2974 22.541 37.0814 20.7576 37.0814 18.5357C37.0814 16.3138 35.2974 14.5303 33.0749 14.5303H26.5536C24.331 14.5303 22.5472 12.7469 22.5472 10.525V4.00535C22.5472 1.7834 20.7632 0 18.5407 0C16.3181 0 14.5342 1.7834 14.5342 4.00535V10.525C14.5342 12.7469 12.7504 14.5303 10.5278 14.5303H4.0065C1.78396 14.5303 0 16.3138 0 18.5357C0 20.7576 1.78396 22.541 4.0065 22.541H10.5278C12.7504 22.541 14.5342 24.3244 14.5342 26.5464V33.066C14.5342 35.288 16.3181 37.0714 18.5407 37.0714C20.7632 37.0714 22.5472 35.288 22.5472 33.066Z'
									fill='#FF5156'
									fill-opacity='0.5'
								/>
							</svg>
							<svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M22.5472 33.066V26.5464C22.5472 24.3244 24.331 22.541 26.5536 22.541H33.0749C35.2974 22.541 37.0814 20.7576 37.0814 18.5357C37.0814 16.3138 35.2974 14.5303 33.0749 14.5303H26.5536C24.331 14.5303 22.5472 12.7469 22.5472 10.525V4.00535C22.5472 1.7834 20.7632 0 18.5407 0C16.3181 0 14.5342 1.7834 14.5342 4.00535V10.525C14.5342 12.7469 12.7504 14.5303 10.5278 14.5303H4.0065C1.78396 14.5303 0 16.3138 0 18.5357C0 20.7576 1.78396 22.541 4.0065 22.541H10.5278C12.7504 22.541 14.5342 24.3244 14.5342 26.5464V33.066C14.5342 35.288 16.3181 37.0714 18.5407 37.0714C20.7632 37.0714 22.5472 35.288 22.5472 33.066Z'
									fill='#FF5156'
									fill-opacity='0.5'
								/>
							</svg>
						</div>
					</div>
				</h1>

				<p className='main-section__description'>
					Provides you with the latest online learning system and material that help your knowledge growing.
				</p>
				<Searchbar />
			</div>

			<div className='main-section__student'>
				<div className='main-section__student-background'></div>
				<div className='main-section__student-image'>
					<img src='/assets/student.svg' alt='student' />
				</div>
			</div>
		</section>
	)
}

export default MainSection
