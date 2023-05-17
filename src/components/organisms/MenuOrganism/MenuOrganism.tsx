import { Form, Link, useRouteLoaderData } from 'react-router-dom'
import MenuBasketAtom from '../../atoms/Menu/MenuBasketAtom/MenuBasketAtom'
import MenuBurgerAtom from '../../atoms/Menu/MenuBurgerAtom/MenuBurgerAtom'
import MenuItemAtom from '../../atoms/Menu/MenuItemAtom/MenuItemAtom'
import MenuLogoAtom from '../../atoms/Menu/MenuLogoAtom/MenuLogoAtom'
import MenuSearchAtom from '../../atoms/Menu/MenuSearchAtom/MenuSearchAtom'
import MenuSearchbar from '../../atoms/Menu/MenuSearchbar/MenuSearchbar'
import ButtonAtom from '../../atoms/UI/ButtonAtom/ButtonAtom'
import './MenuOrganism.scss'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../../../store/slices/authSlice/authSlice'
import MenuAuthAtom from '../../atoms/Menu/MenuAuthAtom/MenuAuthAtom'

interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

const MenuOrganism = (): JSX.Element => {
	const dispatch = useDispatch()

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
					<MenuItemAtom link='#' itemName='Courses' />
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

export default MenuOrganism
