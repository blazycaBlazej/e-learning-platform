import './MenuItemAtom.scss'

interface MenuItemAtomProps {
	itemName: string
	link: string
}

const MenuItemAtom = ({ itemName, link }: MenuItemAtomProps): JSX.Element => {
	return (
		<a href={link}>
			<div className='menu-item'>{itemName}</div>
		</a>
	)
}

export default MenuItemAtom
