import OpinionAtom from '../../atoms/OpinionAtom/OpinionAtom'
import './TestimonialsOrganism.scss'

const TestimonialsOrganism = (): JSX.Element => {
	return (
		<section className='testimonials-organism'>
			<img src='./assets/testimonials/1.png' alt='user' className='testimonials-organism__img1' />
			<img src='./assets/testimonials/2.png' alt='user' className='testimonials-organism__img2' />
			<img src='./assets/testimonials/3.png' alt='user' className='testimonials-organism__img3' />
			<img src='./assets/testimonials/4.png' alt='user' className='testimonials-organism__img4' />
			<img src='./assets/testimonials/5.png' alt='user' className='testimonials-organism__img5' />
			<img src='./assets/testimonials/6.png' alt='user' className='testimonials-organism__img6' />
			<div className='testimonials-organism__shadow'></div>
			<div className='testimonials-organism__content'>
				<h3 className='testimonials-organism__header'>Testimonials</h3>
				<OpinionAtom
					author='Adam Smith'
					prof='Student'
					opinion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
				/>
			</div>
		</section>
	)
}

export default TestimonialsOrganism
