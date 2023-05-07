import { IconMap2, IconPhone, IconMail } from '@tabler/icons-react'
import LogoAtom from '../../../atoms/Menu/MenuLogoAtom/MenuLogoAtom'

import './FooterOrganism.scss'

const FooterOrganism = (): JSX.Element => {
	return (
		<footer className='footer-organism'>
			<div className='footer-organism__top'>
				<div className='footer-organism__about'>
					<LogoAtom />
					<p className='footer-organism__description'>
						Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>

				<div className='footer-organism__links'>
					<div className='footer-organism__links-header'>Quick Links</div>

					<div className='footer-organism__links-content'>
						<span className='footer-organism__link-element'>About</span>
						<span className='footer-organism__link-element'>Blog</span>
						<span className='footer-organism__link-element'>Course</span>
						<span className='footer-organism__link-element'>Contact</span>
					</div>
				</div>

				<div className='footer-organism__contact'>
					<div className='footer-organism__contact-header'>Contact us</div>
					<div className='footer-organism__contact-content'>
						<div className='footer-organism__contact-element'>
							<IconPhone />
							<span>(209) 555-0104</span>
						</div>
						<div className='footer-organism__contact-element'>
							<IconMail />
							<span>michelle.rivera@example.com</span>
						</div>
						<div className='footer-organism__contact-element'>
							<IconMap2 />
							<span>2715 Ash Dr. San Jose, South Dakota 83475</span>
						</div>
					</div>
				</div>
			</div>

			<span className='footer-organism__bottom'>Copyright 2023 | All Rights Reserved</span>
		</footer>
	)
}

export default FooterOrganism
