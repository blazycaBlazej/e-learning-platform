import ButtonAtom from '../../UI/ButtonAtom/ButtonAtom'
import './MenuSearchbar.scss'
import { IconSearch } from '@tabler/icons-react'

const MenuSearchbar = (): JSX.Element => {
	return (
		<section className='menu-searchbar'>
			<input className='menu-searchbar__search' type='text' />

			<div className='menu-searchbar__placeholder'>
				<IconSearch size={18} color='#667085' />
				<span>Search for anything</span>
			</div>
		</section>
	)
}

export default MenuSearchbar
