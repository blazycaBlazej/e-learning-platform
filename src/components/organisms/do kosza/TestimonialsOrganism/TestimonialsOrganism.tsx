import { useRef } from 'react'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'

import OpinionAtom from '../../../atoms/dokosza/OpinionAtom/OpinionAtom'
import './TestimonialsOrganism.scss'

const opinions = [
	{
		author: 'Sarah Johnson',
		img: './assets/testimonials/1.png',
		prof: 'student',
		rating: 5,
		opinion: `I've been using this e-learning platform for a few weeks now, and I am impressed with the quality of the courses. The interface is user-friendly and easy to navigate. Highly recommended!`,
	},
	{
		author: 'Anna Davis',
		img: './assets/testimonials/2.png',
		prof: 'student',
		rating: 4.5,
		opinion: `The courses on this website are fantastic! They are engaging, informative, and have helped me improve my skills significantly. The platform is easy to use, and the support team is excellent. Thank you for providing such an excellent service.`,
	},
	{
		author: 'Emily Green',
		img: './assets/testimonials/3.png',
		prof: 'student',
		rating: 5,
		opinion: `This e-learning platform is amazing! The courses are comprehensive, and the instructors are highly knowledgeable. The platform is easy to use and navigate, and the learning materials are top-notch. I highly recommend it!`,
	},
	{
		author: 'Emily Brown',
		img: './assets/testimonials/4.png',
		prof: 'student',
		rating: 4.5,
		opinion: `I've tried a few e-learning platforms, and this one is by far the best. The courses are well-designed and cover a range of topics. The platform is user-friendly, and the customer support team is always helpful and responsive.`,
	},
	{
		author: 'Daniel Lee',
		img: './assets/testimonials/5.png',
		prof: 'student',
		rating: 5,
		opinion: `I'm so glad I found this e-learning platform! The courses are high-quality, and the instructors are knowledgeable and engaging. The platform is easy to use and navigate, and the learning experience is top-notch.`,
	},
	{
		author: 'Michael Evans',
		img: './assets/testimonials/6.png',
		prof: 'student',
		rating: 4,
		opinion: `I highly recommend this e-learning platform! The courses are excellent, and the platform is easy to use. The support team is always available to answer any questions I have. Overall, a great learning experience!`,
	},
]

const TestimonialsOrganism = (): JSX.Element => {
	const swiperRef = useRef<null | SwiperRef>(null)

	const slideNext = () => {
		console.log('xd')
		swiperRef.current?.swiper.slideNext()
	}

	const slidePrev = () => {
		swiperRef.current?.swiper.slidePrev()
	}
	return (
		<section className='testimonials-organism'>
			<img
				src='./assets/testimonials/1.png'
				alt='user'
				className='testimonials-organism__img1'
				data-aos='fade-right'
				data-aos-delay='600'
			/>
			<img
				src='./assets/testimonials/2.png'
				alt='user'
				className='testimonials-organism__img2'
				data-aos='fade-right'
				data-aos-delay='700'
			/>
			<img
				src='./assets/testimonials/3.png'
				alt='user'
				className='testimonials-organism__img3'
				data-aos='fade-right'
				data-aos-delay='800'
			/>
			<img
				src='./assets/testimonials/4.png'
				alt='user'
				className='testimonials-organism__img4'
				data-aos='fade-left'
				data-aos-delay='600'
			/>
			<img
				src='./assets/testimonials/5.png'
				alt='user'
				className='testimonials-organism__img5'
				data-aos='fade-left'
				data-aos-delay='700'
			/>
			<img
				src='./assets/testimonials/6.png'
				alt='user'
				className='testimonials-organism__img6'
				data-aos='fade-left'
				data-aos-delay='800'
			/>
			<div className='testimonials-organism__shadow'></div>
			<div className='testimonials-organism__content'>
				<h3 className='testimonials-organism__header'>Testimonials</h3>
				<div className='testimonials-organism__swiper'>
					<Swiper
						ref={swiperRef}
						loop={true}
						className='testimonials-organism__swiper'
						autoplay={{
							delay: 2000,
							disableOnInteraction: true,
						}}
						modules={[Autoplay]}>
						{opinions.map((el, index) => (
							<SwiperSlide key={index}>
								<OpinionAtom
									author={el.author}
									img={el.img}
									prof={el.prof}
									opinion={el.opinion}
									rating={el.rating}
									next={slideNext}
									prev={slidePrev}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default TestimonialsOrganism
