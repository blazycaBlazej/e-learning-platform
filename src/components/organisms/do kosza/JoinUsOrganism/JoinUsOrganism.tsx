import ButtonAtom from '../../../atoms/UI/ButtonAtom/ButtonAtom'
import './JoinUsOrganism.scss'

const JoinUsOrganism = (): JSX.Element => {
	return (
		<section className='join-us-organism'>
			<div className='join-us-organism__content'>
				{/* <img src='./assets/joinUs/dots.svg' alt='dots ornament' className='join-us-organism__dots-left' />
				<img src='./assets/joinUs/dots.svg' alt='dots ornament' className='join-us-organism__dots-right' /> */}
				<div className='join-us-organism__left' data-aos='fade-right'>
					<h3 className='join-us-organism__header'>
						Join our <span className='join-us-organism__header--violet'>world's largest</span> learning platform today
					</h3>
					<p className='join-us-organism__description'>Start learning by registering and get 30 days free trail</p>
				</div>
				<div className='join-us-organism__right' data-aos='fade-left'>
					<ButtonAtom btnClass='button--joinInstructor' label='Join as Instructor' />
					<ButtonAtom btnClass='button--joinStudent' label='Join as Student' />
				</div>
			</div>
		</section>
	)
}

export default JoinUsOrganism
