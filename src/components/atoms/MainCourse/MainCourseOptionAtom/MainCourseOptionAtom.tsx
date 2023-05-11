import { IconCertificate, IconDevices, IconInfinity } from '@tabler/icons-react'

import ButtonAtom from '../../UI/ButtonAtom/ButtonAtom'
import './MainCourseOptionAtom.scss'

interface MainCourseOptionAtomProps {
	price: number
	img: string
	name: string
}

const MainCourseOptionAtom = ({ price, img, name }: MainCourseOptionAtomProps): JSX.Element => {
	return (
		<section className='main-course-option-atom'>
			<div className='main-course-option-atom__img-wrapper'>
				<img className='main-course-option-atom__img' loading='lazy' src={img} alt={name} />
			</div>
			<div className='main-course-option-atom__content'>
				<span className='main-course-option-atom__price'>${price}</span>

				<div className='main-course-option-atom__btns'>
					<ButtonAtom label='Buy' btnClass='button--buy' />
					<ButtonAtom label='Add to followed' btnClass='button--to-follow' />
				</div>
				<span className='main-course-option-atom__money-back'>30-Day Money-Back Guarantee</span>
				<h2 className='main-course-option-atom__course-includes'>This course includes:</h2>
				<ul className='main-course-option-atom__ul'>
					<li className='main-course-option-atom__li'>
						<IconInfinity size={18} />
						Full lifetime access
					</li>
					<li className='main-course-option-atom__li'>
						<IconDevices size={18} />
						Access on mobile and TV
					</li>
					<li className='main-course-option-atom__li'>
						<IconCertificate size={18} />
						Certificate of completion
					</li>
				</ul>
			</div>
		</section>
	)
}

export default MainCourseOptionAtom
