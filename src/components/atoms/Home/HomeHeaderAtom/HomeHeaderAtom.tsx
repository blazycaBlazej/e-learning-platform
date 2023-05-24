import './HomeHeaderAtom.scss'

export const HomeHeaderAtom = (): JSX.Element => {
	return (
		<section className='home-header-atom'>
			<div className='home-header-atom__img-wrapper'>
				<img
					className='home-header-atom__img home-header-atom__img--tablet'
					alt=''
					src='https://img-c.udemycdn.com/notices/home_carousel_slide/image_responsive/002decbd-35d8-4c0e-a89b-5f65744c54d2.jpg'
				/>
				<img
					className='home-header-atom__img home-header-atom__img--desktop'
					data-tablet='true'
					data-desktop='false'
					alt=''
					src='https://img-c.udemycdn.com/notices/home_carousel_slide/image/8e6773bd-6501-4071-a61f-cf26840e0d31.jpg'
				/>
			</div>
               
               <div className="home-header-atom__banner">
                    <h1>Knowledge at your fingertips</h1>
                    <p>Courses are on sale now. Log in to your Udemy account to see your discount.</p>
               </div>
		</section>
	)
}

