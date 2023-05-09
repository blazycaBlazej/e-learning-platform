import { Link } from 'react-router-dom'
import MenuBasketAtom from '../../atoms/Menu/MenuBasketAtom/MenuBasketAtom'
import MenuBurgerAtom from '../../atoms/Menu/MenuBurgerAtom/MenuBurgerAtom'
import MenuItemAtom from '../../atoms/Menu/MenuItemAtom/MenuItemAtom'
import MenuLogoAtom from '../../atoms/Menu/MenuLogoAtom/MenuLogoAtom'
import MenuSearchAtom from '../../atoms/Menu/MenuSearchAtom/MenuSearchAtom'
import MenuSearchbar from '../../atoms/Menu/MenuSearchbar/MenuSearchbar'
import ButtonAtom from '../../atoms/UI/ButtonAtom/ButtonAtom'
import './MenuOrganism.scss'

const MenuOrganism = (): JSX.Element => {
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
				<Link to='basket'>
					<MenuBasketAtom />
				</Link>
				<span className='menu-organism__search-icon'>
					<MenuSearchAtom />
				</span>
			</div>

			<div className='menu-organism__btns'>
				<ButtonAtom label='Log in' btnClass='button--login' />
				<ButtonAtom label='Sign up' btnClass='button--sign' />
			</div>
		</nav>
	)
}

export default MenuOrganism