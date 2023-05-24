import { IconWorld } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import './FooterOrganism.scss'
import { ButtonAtom } from '../../atoms/UI/ButtonAtom/ButtonAtom'

export const FooterOrganism = (): JSX.Element => {
	return (
		<footer className='footer-organism'>
			<div className='footer-organism__header'>
				<span className='footer-organism__header-text'>
					Top companies choose Udemy Business to build in-demand career skills.
				</span>

				<div className='footer-organism__partners'>
					<img
						loading='lazy'
						alt='Nasdaq'
						height='44'
						width='115'
						src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg'
					/>
					<img
						loading='lazy'
						alt='Volkswagen'
						height='44'
						width='44'
						src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg'
					/>
					<img
						loading='lazy'
						alt='Box'
						height='44'
						width='67'
						src='https://s.udemycdn.com/partner-logos/v4/box-light.svg'
					/>
					<img
						loading='lazy'
						alt='NetApp'
						height='44'
						width='115'
						src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg'
					/>
					<img
						loading='lazy'
						alt='Eventbrite'
						height='44'
						width='115'
						src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg'
					/>
				</div>
			</div>

			<div className='footer-organism__border'></div>

			<nav className='footer-organism__nav'>
				<ul className='footer-organism__nav-list'>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Teach on Udemy</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Get the app</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Udemy Business</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>About us</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Contact us</li>
					</Link>
				</ul>
				<ul className='footer-organism__nav-list'>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Careers</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Blog</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Help and Support</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Affiliate</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Investors</li>
					</Link>
				</ul>
				<ul className='footer-organism__nav-list'>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Terms</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Privacy policy</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Cookie settings</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Sitemap</li>
					</Link>
					<Link to='#'>
						<li className='footer-organism__nav-element-list'>Accessibility statement</li>
					</Link>
				</ul>
				<div className='footer-organism__btn'>
					<ButtonAtom
						label={
							<>
								<IconWorld size={18} />
								<span> English</span>
							</>
						}
						btnClass='button--lang'
					/>
				</div>
			</nav>
			<div className='footer-organism__bottom-section'>
				<img
					src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
					alt='Udemy'
					width='91.07142857142857'
					height='34'
				/>
				<span>© 2023 Udemy, Inc.</span>
			</div>
		</footer>
	)
}
