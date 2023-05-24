import { useEffect, useRef } from 'react'
import FlipMove from 'react-flip-move'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { uiAction } from '../../../store/slices/uiSlice/uiSlice'
import { authAction } from '../../../store/slices/authSlice/authSlice'
import './MenuTabletOrganism.scss'

interface StateRoot {
	ui: {
		menuIsOpen: boolean
	}
	auth: {
		isLogin: boolean
	}
}

export const MenuTabletOrganism = (): JSX.Element => {
	const location = useLocation()
	const dispatch = useDispatch()
	const myRef = useRef<null | HTMLDivElement>(null)
	const isOpen = useSelector((state: StateRoot) => state.ui.menuIsOpen)
	const isLogin = useSelector((state: StateRoot) => state.auth.isLogin)
	const disptach = useDispatch()
	if (isOpen) {
		document.body.style.overflowY = 'hidden'
	} else {
		document.body.style.overflowY = 'scroll'
	}

	useEffect(() => {
		if (isOpen) {
			dispatch(uiAction.closeMenu())
		}
	}, [location, dispatch])

	useEffect(() => {
		const clickCheckout = (e: Event) => {
			if (myRef.current && !myRef.current.contains(e.target as Node)) {
				dispatch(uiAction.closeMenu())
			}
		}
		document.addEventListener('click', clickCheckout)

		return () => {
			document.removeEventListener('click', clickCheckout)
		}
	}, [dispatch])

	const clickHandler = () => {
		dispatch(authAction.logout())
	}

	return (
		<FlipMove
			duration={200}
			easing='linear'
			enterAnimation={{
				from: { opacity: '0', transform: 'translateX(-100%)', backgroundColor: 'rgba(28, 29, 31, 0.5)' },
				to: { opacity: '1', transform: 'translateX(0)' },
			}}
			leaveAnimation={{
				from: { opacity: '1', transform: 'translateX(0)', backgroundColor: 'none' },
				to: { opacity: '0', transform: 'translateX(-100%)', backgroundColor: 'rgba(28, 29, 31, 0.5)' },
			}}>
			{isOpen && (
				<div className='menu-tablet-organism'>
					<div className='menu-tablet-organism__menu' ref={myRef}>
						<ul className='menu-tablet-organism__list'>
							{isLogin ? (
								<>
									<li
										onClick={clickHandler}
										className='menu-tablet-organism__element-list menu-tablet-organism__element-list--violet'>
										Logout
									</li>
								</>
							) : (
								<>
									<Link to='/login'>
										<li className='menu-tablet-organism__element-list menu-tablet-organism__element-list--violet'>
											Log in
										</li>
									</Link>
									<Link to='/register'>
										<li className='menu-tablet-organism__element-list menu-tablet-organism__element-list--violet'>
											Sign up
										</li>
									</Link>
								</>
							)}
						</ul>
						<h2 className='menu-tablet-organism__header'>Most Popular</h2>
						<ul className='menu-tablet-organism__list'>
							<Link to='/courses/design'>
								<li className='menu-tablet-organism__element-list'>Design</li>
							</Link>
							<Link to='/courses/development'>
								<li className='menu-tablet-organism__element-list'>Development</li>
							</Link>
							<Link to='/courses/marketing'>
								<li className='menu-tablet-organism__element-list'>Marketing</li>
							</Link>
							<Link to='/courses/it-and-software'>
								<li className='menu-tablet-organism__element-list'>IT and Software</li>
							</Link>
							<Link to='/courses/personal-development'>
								<li className='menu-tablet-organism__element-list'>Personal Development</li>
							</Link>
							<Link to='/courses/business'>
								<li className='menu-tablet-organism__element-list'>Business</li>
							</Link>
							<Link to='/courses/photography'>
								<li className='menu-tablet-organism__element-list'>Photography</li>
							</Link>
							<Link to='/courses/music'>
								<li className='menu-tablet-organism__element-list'>Music</li>
							</Link>
						</ul>
					</div>
				</div>
			)}
		</FlipMove>
	)
}
