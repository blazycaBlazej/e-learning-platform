import HeaderOrganism from './components/organisms/HeaderOrganism/HeaderOrganism'
import './App.scss'

import MainSection from './components/molecules/MainSection/MainSection'
import SSSwiper from './components/atoms/Swiper/PartnersSwiper'
import CoursesMolecul from './components/molecules/CoursesMolecul/CoursesMolecul'
import CategoriesOrganism from './components/organisms/CategoriesOrgansim/CategoriesOrganism'
import DifferenceOrganism from './components/organisms/DifferenceOrganism/DifferenceOrganism'
import TestimonialsOrganism from './components/organisms/TestimonialsOrganism/TestimonialsOrganism'

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

			<div className='app__category-add-ons'>
				<img src='/assets/addOns/categoryAddOns.svg' />
			</div>

			<div className='app__category-add-ons2'>
				<img src='/assets/addOns/categoryAddOns2.svg' />
			</div>

			<HeaderOrganism />
			<MainSection />
			<SSSwiper />
			<CoursesMolecul />
			<CategoriesOrganism />
			<DifferenceOrganism />
			<TestimonialsOrganism />
		</div>
	)
}

export default App
