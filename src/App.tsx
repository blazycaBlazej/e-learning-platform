import HeaderOrganism from './components/organisms/HeaderOrganism/HeaderOrganism'
import './App.scss'

import MainSection from './components/molecules/MainSection/MainSection'
import SSSwiper from './components/atoms/Swiper/PartnersSwiper'
import CoursesMolecul from './components/molecules/CoursesMolecul/CoursesMolecul'
import CategoriesOrganism from './components/organisms/CategoriesOrganism/CategoriesOrganism'
import DifferenceOrganism from './components/organisms/DifferenceOrganism/DifferenceOrganism'
import TestimonialsOrganism from './components/organisms/TestimonialsOrganism/TestimonialsOrganism'
import JoinUsOrganism from './components/organisms/JoinUsOrganism/JoinUsOrganism'
import FooterOrganism from './components/organisms/FooterOrganism/FooterOrganism'

function App() {
	return (
		<div className='app'>
			<div className='app__shadow-left'></div>
			<div className='app__shadow-right'></div>
			<div className='app__shadow-bottom'></div>
			<div className='app__half-circle'>
				<img src='/assets/addOns/halfCircle.svg' />
			</div>

			<div className='app__circle'>
				<img src='/assets/addOns/circle.svg' />
			</div>

			<div className='app__category-shadow'></div>

			<div className='app__category-add-ons' data-aos='fade-right' data-aos-delay='700'>
				<img src='/assets/addOns/categoryAddOns.svg' />
			</div>

			<div className='app__category-add-ons2' data-aos='fade-left' data-aos-delay='700'>
				<img src='/assets/addOns/categoryAddOns2.svg' />
			</div>

			<HeaderOrganism />
			<MainSection />
			<SSSwiper />
			<CoursesMolecul />
			<CategoriesOrganism />
			<DifferenceOrganism />
			<TestimonialsOrganism />
			<JoinUsOrganism />
			<FooterOrganism />
		</div>
	)
}

export default App
