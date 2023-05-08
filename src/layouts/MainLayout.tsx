import { Outlet } from 'react-router-dom'
import MenuOrganism from '../components/organisms/MenuOrganism/MenuOrganism'

// import './MainLayout.scss'

const MainLayout = (): JSX.Element => {
	return (
		<>
			<MenuOrganism />
			<Outlet />
		</>
	)
}

export default MainLayout
