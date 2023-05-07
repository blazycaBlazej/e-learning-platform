import { IconShoppingCart } from '@tabler/icons-react'
import './MenuBasketAtom.scss'

const MenuBasketAtom = (): JSX.Element => {
	return (
		<span className='menu-basket-atom'>
			<IconShoppingCart size={25} />
		</span>
	)
}

export default MenuBasketAtom
