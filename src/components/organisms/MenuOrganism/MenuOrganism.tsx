import { Form, Link, useRouteLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	MenuBasketAtom,
	MenuBurgerAtom,
	MenuItemAtom,
	MenuLogoAtom,
	MenuSearchAtom,
	MenuSearchbar,
	ButtonAtom,
	MenuAuthAtom,
} from '../../atoms'

import './MenuOrganism.scss'

interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

export const MenuOrganism = (): JSX.Element => {
	const isLogin = useSelector((state: StateRoot) => state.auth.isLogin)

	return (
		<nav className='menu-organism'>
			<div className='menu-organism__burger'>
				<MenuBurgerAtom />
			</div>

			<Link to='/' className='menu-organism__logo'>
				<MenuLogoAtom />
			</Link>

			<Link to='/courses'>
				<div className='menu-organism__menu-item'>
					<MenuItemAtom itemName='Courses' />
				</div>
			</Link>

			<div className='menu-organism__searchbar'>
				<MenuSearchbar />
			</div>

			<div className='menu-organism__options'>
				<Link to='/basket'>
					<MenuBasketAtom />
				</Link>
				<span className='menu-organism__search-icon'>
					<MenuSearchAtom />
				</span>
			</div>

			{!isLogin ? (
				<div className='menu-organism__btns'>
					<Link to='/login'>
						<ButtonAtom label='Log in' btnClass='button--login' />
					</Link>
					<Link to='/register'>
						<ButtonAtom label='Sign up' btnClass='button--sign' />
					</Link>
				</div>
			) : (
				<MenuAuthAtom />
			)}
		</nav>
	)
}
