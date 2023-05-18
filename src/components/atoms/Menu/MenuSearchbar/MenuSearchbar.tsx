import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconSearch } from '@tabler/icons-react'
import './MenuSearchbar.scss'

const MenuSearchbar = (): JSX.Element => {
	const refSearch = useRef<null | HTMLInputElement>(null)
	const navigate = useNavigate()
	useEffect(() => {
		const focusInHandler = () => {
			refSearch.current?.addEventListener('keydown', KeyDownHandler)
		}
		const focusOutHandler = () => {
			refSearch.current?.removeEventListener('keydown', KeyDownHandler)
		}

		const KeyDownHandler = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				const searchTrim = refSearch.current?.value

				if (searchTrim) {
					refSearch.current!.value = ''
					refSearch.current?.removeEventListener('keydown', KeyDownHandler)
					refSearch.current?.blur()
					navigate(`/courses/search/${searchTrim}`)
				}
			}
		}

		refSearch.current?.addEventListener('focusin', focusInHandler)
		refSearch.current?.addEventListener('focusout', focusOutHandler)
		return () => {
			refSearch.current?.removeEventListener('keydown', KeyDownHandler)
			refSearch.current?.removeEventListener('focusin', focusInHandler)
			refSearch.current?.removeEventListener('focusout', focusOutHandler)
		}
	}, [])
	return (
		<section className='menu-searchbar'>
			<input className='menu-searchbar__search' type='text' required ref={refSearch} />

			<div className='menu-searchbar__placeholder'>
				<IconSearch size={18} color='#667085' />
				<span className='menu-searchbar__placeholder-text'>Search for anything</span>
			</div>
		</section>
	)
}

export default MenuSearchbar
