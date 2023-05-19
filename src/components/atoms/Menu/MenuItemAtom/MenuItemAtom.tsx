import './MenuItemAtom.scss'

interface MenuItemAtomProps {
	itemName: string
}

const MenuItemAtom = ({ itemName }: MenuItemAtomProps): JSX.Element => {
	return <div className='menu-item'>{itemName}</div>
}

export default MenuItemAtom
