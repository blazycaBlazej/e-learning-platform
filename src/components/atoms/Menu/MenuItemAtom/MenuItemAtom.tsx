import './MenuItemAtom.scss'

interface MenuItemAtomProps {
	itemName: string
}

export const MenuItemAtom = ({ itemName }: MenuItemAtomProps): JSX.Element => {
	return <div className='menu-item'>{itemName}</div>
}


