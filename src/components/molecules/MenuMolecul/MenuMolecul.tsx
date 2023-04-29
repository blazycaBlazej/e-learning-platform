import MenuItemAtom from '../../atoms/Menu/MenuItemAtom/MenuItemAtom'
import './MenuMolecul.scss'

const MenuMolecul = (): JSX.Element => {
	return (
		<div className='menu'>
			<MenuItemAtom itemName='Home' link='#' />
			<MenuItemAtom itemName='About' link='#' />
			<MenuItemAtom itemName='Course' link='#' />
			<MenuItemAtom itemName='Blog' link='#' />
			<MenuItemAtom itemName='Contact' link='#' />
		</div>
	)
}

export default MenuMolecul
