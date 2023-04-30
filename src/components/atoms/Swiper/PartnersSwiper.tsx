import { useRef } from 'react'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { Autoplay } from 'swiper'
import './PartnersSwiper.scss'
import 'swiper/css'

const PartnersSwiper = (): JSX.Element => {
	const swiperRef = useRef<SwiperRef | null>(null)

	const slideNext = () => {
		swiperRef.current?.swiper.slideNext()
	}

	const slidePrev = () => {
		swiperRef.current?.swiper.slidePrev()
	}

	const partners = [
		'/assets/partners/1.svg',
		'/assets/partners/2.svg',
		'/assets/partners/3.svg',
		'/assets/partners/4.svg',
		'/assets/partners/5.svg',
		'/assets/partners/6.svg',
		'/assets/partners/7.svg',
		'/assets/partners/8.svg',
		'/assets/partners/10.svg',
		'/assets/partners/9.svg',
	]
	return (
		<div className='partners-swiper'>
			<span className='partners-swiper__header'>Our Course Partners</span>
			<div className='partners-swiper__arrow' onClick={slidePrev}>
				<IconChevronLeft size={32} color='white' />
			</div>

			<Swiper
				ref={swiperRef}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				slidesPerView={'auto'}
				spaceBetween={84}
				loop={true}
				modules={[Autoplay]}>
				{partners.map(el => (
					<SwiperSlide style={{ width: 'auto' }}>
						<div className='partners-swiper__element'>
							<img src={el} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className='partners-swiper__arrow' onClick={slideNext}>
				<IconChevronRight size={32} color='white' />
			</div>
		</div>
	)
}

export default PartnersSwiper
