import { IconSearch } from '@tabler/icons-react'
import './MenuSearchAtom.scss'

export const MenuSearchAtom = (): JSX.Element => {
	return (
		<span className='menu-search-atom'>
			<IconSearch size={25} />
		</span>
	)
}
