import { Outlet } from 'react-router-dom'
import MenuOrganism from '../components/organisms/MenuOrganism/MenuOrganism'

import './MainLayout.scss'
import FooterOrganism from '../components/organisms/FooterOrganism/FooterOrganism'
import MenuTabletOrganism from '../components/organisms/MenuTabletOrganism/MenuTabletOrganism'

const MainLayout = (): JSX.Element => {
	return (
		<section className='main-layout'>
			<MenuOrganism />
			<MenuTabletOrganism />
			<div className='main-layout__content'>
				<Outlet />
			</div>
			<div className='main-layout__footer'>
				<FooterOrganism />
			</div>
		</section>
	)
}

export default MainLayout
