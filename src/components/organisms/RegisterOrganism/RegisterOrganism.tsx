import { Link } from 'react-router-dom'
import ButtonAtom from '../../atoms/UI/ButtonAtom/ButtonAtom'
import './RegisterOrganism.scss'

const RegisterOrganism = (): JSX.Element => {
	return (
		<section className='register-organism'>
			<h2 className='register-organism__header'>Sign up and start learning</h2>
			<div className='register-organism__wrapper'>
				<div className='register-organism__input-wrapper'>
					<input type='text' name='name' className='register-organism__input' required />
					<label className='register-organism__label' htmlFor='name'>
						Full name
					</label>
				</div>
				<span className='register-organism__error'>error</span>
			</div>
			<div className='register-organism__wrapper'>
				<div className='register-organism__input-wrapper'>
					<input type='text' name='email' className='register-organism__input' required />
					<label className='register-organism__label' htmlFor='email'>
						Email
					</label>
				</div>
				<span className='register-organism__error'>error</span>
			</div>
			<div className='register-organism__wrapper'>
				<div className='register-organism__input-wrapper'>
					<input type='password' name='password' className='register-organism__input' required />
					<label className='register-organism__label' htmlFor='password'>
						Password
					</label>
				</div>
				<span className='register-organism__error'>error</span>
			</div>
			<ButtonAtom btnClass='button--registerPage' label='Sign up' />
			<p className='register-organism__statute'>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
			<div className='register-organism__sign-up-box'>
				<span className='register-organism__sign-up-box-text'>
					Already have an account?{' '}
					<Link to='/login'>
						<span className='register-organism__sign-up-box-text register-organism__sign-up-box-text--violet'>
							Login
						</span>
					</Link>
				</span>
			</div>
		</section>
	)
}

export default RegisterOrganism
