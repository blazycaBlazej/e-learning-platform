import { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import { Link } from 'react-router-dom'
import { IconMenu2 } from '@tabler/icons-react'
import './MenuBurgerAtom.scss'
import MenuTabletOrganism from '../../../organisms/MenuTabletOrganism/MenuTabletOrganism'

const MenuBurgerAtom = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const handleScroll = (event: Event) => {
			if (isOpen) {
				event.preventDefault()

				window.scrollTo(0, 0)
			}
		}

		document.addEventListener('scroll', handleScroll)

		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [isOpen])

	return (
		<span className='menu-burger-atom'>
			<IconMenu2 size={30} onClick={() => setIsOpen(!isOpen)} className='menu-burger-atom__burger' />

			<FlipMove
				duration={100}
				easing='linear'
				enterAnimation={{
					from: { opacity: '0', transform: 'translateX(-100%)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				}}
				leaveAnimation={{
					from: { opacity: '1', transform: 'translateX(0)' },
					to: { opacity: '0', transform: 'translateX(-100%)' },
				}}>
				{isOpen && (
					<div className='menu-burger-atom__menu' onClick={() => setIsOpen(!isOpen)}>
						<ul className='menu-burger-atom__list'>
							<Link to='..'>
								<li className='menu-burger-atom__element-list menu-burger-atom__element-list--violet'>Log in</li>
							</Link>
							<Link to='..'>
								<li className='menu-burger-atom__element-list menu-burger-atom__element-list--violet'>Sign up</li>
							</Link>
						</ul>
						<h2 className='menu-burger-atom__header'>Most Popular</h2>
						<ul className='menu-burger-atom__list'>
							<Link to='courses'>
								<li className='menu-burger-atom__element-list'>Design</li>
							</Link>
							<Link to='courses'>
								<li className='menu-burger-atom__element-list'>Development</li>
							</Link>
							<Link to='courses'>
								<li className='menu-burger-atom__element-list'>Marketing</li>
							</Link>
							<Link to='courses'>
								<li className='menu-burger-atom__element-list'>IT and Software</li>
							</Link>
							<Link to='courses'>
								<li className='menu-burger-atom__element-list'>Personal Development</li>
							</Link>
							<Link to='courses'>
								<li className='menu-burger-atom__element-list'>Business</li>
							</Link>
							<Link to='courses'>
								<li className='menu-burger-atom__element-list'>Photography</li>
							</Link>
							<Link to='courses'>
								<li className='menu-burger-atom__element-list'>Music</li>
							</Link>
						</ul>
					</div>
				)}
			</FlipMove>
		</span>
	)
}

export default MenuBurgerAtom
