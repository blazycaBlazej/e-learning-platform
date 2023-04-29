import ButtonAtom from '../../UI/ButtonAtom/ButtonAtom'
import './Searchbar.scss'
import { IconSearch } from '@tabler/icons-react'

const Searchbar = (): JSX.Element => {
	return (
		<div className='searchbar'>
			<input className='searchbar__search' type='text' />
			<div className='searchbar__button'>
				<ButtonAtom label='Explore' btnClass='button--explore' />
			</div>
			<div className='searchbar__placeholder'>
				<IconSearch size={32} color='#667085' />
				<span>Want to learn ?</span>
			</div>
		</div>
	)
}

export default Searchbar
