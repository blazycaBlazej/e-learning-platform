import FlipMove from 'react-flip-move'
import './MenuTabletOrganism.scss'
// import { useEffect, useState } from 'react'
const MenuTabletOrganism = (): JSX.Element => {
	// useEffect(() => {
	// 	const handleScroll = (event: Event) => {
	// 		window.scrollTo(0, 0)
	// 		event.preventDefault()
	// 		console.log('xd')
	// 	}

	// 	document.addEventListener('scroll', handleScroll)
	// }, [])
	return (
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
			{
				<div className='menu-tablet-organism'>
					<ul className='menu-tablet-organism__list'>
						<li className='menu-tablet-organism__element-list menu-tablet-organism__element-list--violet'>Log in</li>
						<li className='menu-tablet-organism__element-list menu-tablet-organism__element-list--violet'>Sign up</li>
					</ul>
					<h2 className='menu-tablet-organism__header'>Most Popular</h2>
					<ul className='menu-tablet-organism__list'>
						<li className='menu-tablet-organism__element-list'>Design</li>
						<li className='menu-tablet-organism__element-list'>Development</li>
						<li className='menu-tablet-organism__element-list'>Marketing</li>
						<li className='menu-tablet-organism__element-list'>IT and Software</li>
						<li className='menu-tablet-organism__element-list'>Personal Development</li>
						<li className='menu-tablet-organism__element-list'>Business</li>
						<li className='menu-tablet-organism__element-list'>Photography</li>
						<li className='menu-tablet-organism__element-list'>Music</li>
					</ul>
				</div>
			}
		</FlipMove>
	)
}

export default MenuTabletOrganism
