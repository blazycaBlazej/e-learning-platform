import { Outlet } from 'react-router-dom'
import { MenuOrganism, FooterOrganism, MenuTabletOrganism } from '../components/organisms'

import './MainLayout.scss'

export const MainLayout = (): JSX.Element => {
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
