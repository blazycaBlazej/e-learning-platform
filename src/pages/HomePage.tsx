import HeaderOrganism from '../components/organisms/HeaderOrganism/HeaderOrganism'
import MainSection from '../components/molecules/MainSection/MainSection'
import PartnersSwiper from '../components/atoms/PartnersSwiper/PartnersSwiper'
import CoursesMolecul from '../components/molecules/CoursesMolecul/CoursesMolecul'
import CategoriesOrganism from '../components/organisms/CategoriesOrganism/CategoriesOrganism'
import DifferenceOrganism from '../components/organisms/DifferenceOrganism/DifferenceOrganism'
import TestimonialsOrganism from '../components/organisms/TestimonialsOrganism/TestimonialsOrganism'
import JoinUsOrganism from '../components/organisms/JoinUsOrganism/JoinUsOrganism'
import FooterOrganism from '../components/organisms/FooterOrganism/FooterOrganism'

import './HomePage.scss'

const HomePage = (): JSX.Element => {
	return (
		<div className='home-page'>
			<div className='home-page__shadow-left'></div>
			<div className='home-page__shadow-right'></div>
			<div className='home-page__shadow-bottom'></div>
			<div className='home-page__half-circle'>
				<img src='/assets/addOns/halfCircle.svg' />
			</div>

			<div className='home-page__circle'>
				<img src='/assets/addOns/circle.svg' />
			</div>

			<div className='home-page__category-shadow'></div>

			<div className='home-page__category-add-ons' data-aos='fade-right' data-aos-delay='700'>
				<img src='/assets/addOns/categoryAddOns.svg' />
			</div>

			<div className='home-page__category-add-ons2' data-aos='fade-left' data-aos-delay='700'>
				<img src='/assets/addOns/categoryAddOns2.svg' />
			</div>

			<HeaderOrganism />
			<MainSection />
			<PartnersSwiper />
			<CoursesMolecul />
			<CategoriesOrganism />
			<DifferenceOrganism />
			<TestimonialsOrganism />
			<JoinUsOrganism />
			<FooterOrganism />
		</div>
	)
}

export default HomePage
