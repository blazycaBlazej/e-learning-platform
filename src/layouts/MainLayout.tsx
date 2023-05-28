import { Outlet, useNavigation } from 'react-router-dom'
import { MenuOrganism, FooterOrganism, MenuTabletOrganism } from '../components/organisms'

import './MainLayout.scss'

export const MainLayout = (): JSX.Element => {
	const navigation = useNavigation()
	return (
		<section className='main-layout'>
			<MenuOrganism />
			<MenuTabletOrganism />
			<main className='main-layout__content'>
				<Outlet />
			</main>
			<div className='main-layout__footer'>
				<FooterOrganism />
			</div>
		</section>
	)
}
