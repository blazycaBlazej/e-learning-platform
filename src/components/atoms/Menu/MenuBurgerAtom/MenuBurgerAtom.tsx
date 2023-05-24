import { useDispatch } from 'react-redux'

import { IconMenu2 } from '@tabler/icons-react'
import './MenuBurgerAtom.scss'

import { uiAction } from '../../../../store/slices/uiSlice/uiSlice'
export const MenuBurgerAtom = (): JSX.Element => {
	const dispatch = useDispatch()

	const clickHandler = (e: React.MouseEvent) => {
		e.stopPropagation()
		dispatch(uiAction.toggleMenu())
	}
	return (
		<span className='menu-burger-atom'>
			<IconMenu2 size={30} onClick={clickHandler} className='menu-burger-atom' />
		</span>
	)
}

