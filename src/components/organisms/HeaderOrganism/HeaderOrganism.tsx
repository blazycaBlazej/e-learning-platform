import LogoAtom from '../../atoms/LogoAtom/LogoAtom'
import ButtonAtom from '../../atoms/ButtonAtom/ButtonAtom'
import MenuMolecul from '../../molecules/MenuMolecul/MenuMolecul'

import './HeaderOrganism.scss'

const HeaderOrganism = (): JSX.Element => {
	return (
		<header className='header'>
               <div className="header__shadow"></div>
			<LogoAtom />

			<div className='header__svg'>
				<svg width='82' height='124' viewBox='0 0 82 124' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g clip-path='url(#clip0_5_1317)'>
						<path
							d='M41 123.142C18.8258 123.142 0.854156 105.096 0.854156 82.8292V-45.8293C0.854156 -68.0958 18.8258 -86.1423 41 -86.1423C63.1742 -86.1423 81.1458 -68.0958 81.1458 -45.8293V82.8292C81.1458 105.096 63.1742 123.142 41 123.142Z'
							stroke='white'
							stroke-opacity='0.3'
							stroke-width='3'
							stroke-miterlimit='10'
						/>
						<path
							d='M41 88.8334C37.7029 88.8334 35.0208 86.1402 35.0208 82.8293V-45.8292C35.0208 -49.14 37.7029 -51.8333 41 -51.8333C44.2971 -51.8333 46.9792 -49.14 46.9792 -45.8292V82.8293C46.9792 86.1402 44.2971 88.8334 41 88.8334Z'
							fill='#FF5156'
						/>
					</g>
					<defs>
						<clipPath id='clip0_5_1317'>
							<rect width='82' height='211' fill='white' transform='translate(0 -87)' />
						</clipPath>
					</defs>
				</svg>
			</div>
			<MenuMolecul />

			<div className='header__btns'>
				<ButtonAtom label={'Login'} btnClass='button--login' />
				<ButtonAtom label={'Get Started'} btnClass='button--register' />
			</div>
		</header>
	)
}

export default HeaderOrganism
