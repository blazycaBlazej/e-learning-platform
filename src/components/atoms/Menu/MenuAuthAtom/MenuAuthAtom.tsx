import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FlipMove from 'react-flip-move'
import './MenuAuthAtom.scss'
import { useDispatch } from 'react-redux'
import { authAction } from '../../../../store/slices/authSlice/authSlice'

const MenuAuthAtom = (): JSX.Element => {
	const refMenu = useRef<null | HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)
	const dispatch = useDispatch()
	const location = useLocation()
	useEffect(() => {
		const enterHandler = () => {
			setIsVisible(true)
		}
		const leaveHandler = () => {
			setIsVisible(false)
		}

		refMenu.current!.addEventListener('mouseenter', enterHandler)
		refMenu.current!.addEventListener('mouseleave', leaveHandler)

		// return () => {
		// 	refMenu.current!.removeEventListener('mouseleave', leaveHandler)
		// 	refMenu.current!.removeEventListener('mouseenter', enterHandler)
		// }
	}, [isVisible])

	useEffect(() => {
		setIsVisible(false)
	}, [location])

	const clickHandler = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('name')
		localStorage.removeItem('email')
		dispatch(authAction.logout())
	}
	return (
		<section className='menu-auth-atom' ref={refMenu}>
			<span className='menu-auth-atom__circle'>{localStorage.getItem('name')?.charAt(0)}</span>

			<FlipMove
				duration={200}
				easing='linear'
				enterAnimation={{
					from: { opacity: '0', transform: 'translateY(-10%)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				}}
				leaveAnimation={{
					from: { opacity: '1', transform: 'translateY(0)' },
					to: { opacity: '0', transform: 'translateY(-10%)' },
				}}>
				{isVisible && (
					<div className='menu-auth-atom__box'>
						<div className='menu-auth-atom__menu'>
							<div className='menu-auth-atom__menu-header'>
								<div className='menu-auth-atom__menu-big-circle'>
									<span>{localStorage.getItem('name')?.charAt(0)}</span>
								</div>
								<div className='menu-auth-atom__menu-user-name-box'>
									<span className='menu-auth-atom__menu-user-name'>{localStorage.getItem('name')}</span>
									<span className='menu-auth-atom__menu-user-email'>{localStorage.getItem('email')}</span>
								</div>
							</div>
							<div className='menu-auth-atom__menu-border'></div>
							<div className='menu-auth-atom__menu-content'>
								<ul className='menu-auth-atom__menu-list'>
									<Link to='/my-course'>
										<li className='menu-auth-atom__menu-element'>My learning</li>
									</Link>

									<Link to='/basket'>
										<li className='menu-auth-atom__menu-element'>My cart</li>
									</Link>
									<Link to='/wishlist'>
										<li className='menu-auth-atom__menu-element'>Wishlist</li>
									</Link>
									<Link to='/instructor-courses'>
										<li className='menu-auth-atom__menu-element'>Instructor Courses</li>
									</Link>
									<li onClick={clickHandler} className='menu-auth-atom__menu-element'>
										Log out
									</li>
								</ul>
							</div>
						</div>
					</div>
				)}
			</FlipMove>
		</section>
	)
}

export default MenuAuthAtom
