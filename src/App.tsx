import HeaderOrganism from './components/organisms/HeaderOrganism/HeaderOrganism'
import './App.scss'

import MainSection from './components/molecules/MainSection/MainSection'
import SSSwiper from './components/atoms/Swiper/PartnersSwiper'

function App() {
	return (
		<div className='app'>
			<div className='app__shadow-left'></div>
			<div className='app__shadow-right'></div>
			<div className='app__shadow-bottom'></div>
			<div className='app__half-circle'>
				<img src='/assets/halfCircle.svg' />
			</div>

			<div className='app__circle'>
				<img src='/assets/circle.svg' />
			</div>
			<HeaderOrganism />
			<MainSection />
			<SSSwiper />
		</div>
	)
}

export default App
