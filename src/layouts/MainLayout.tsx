import { Outlet } from 'react-router-dom'
import MenuOrganism from '../components/organisms/MenuOrganism/MenuOrganism'

import './MainLayout.scss'

const MainLayout = (): JSX.Element => {
	return (
		<section className='main-layout'>
			<MenuOrganism />
			<div className='main-layout__content'>
				<Outlet />
			</div>
		</section>
	)
}

export default MainLayout
