import { Link } from 'react-router-dom'
import ButtonAtom from '../../atoms/UI/ButtonAtom/ButtonAtom'
import './LoginOrganism.scss'

const LoginOrganism = (): JSX.Element => {
	return (
		<section className='login-organism'>
			<h2 className='login-organism__header'>Log in to your Udemy account</h2>
			<div className='login-organism__wrapper'>
				<div className='login-organism__input-wrapper'>
					<input type='text' name='email' className='login-organism__input' required />
					<label className='login-organism__label' htmlFor='email'>
						Email
					</label>
				</div>
				<span className='login-organism__error'>error</span>
			</div>
			<div className='login-organism__wrapper'>
				<div className='login-organism__input-wrapper'>
					<input type='password' name='password' className='login-organism__input' required />
					<label className='login-organism__label' htmlFor='password'>
						Password
					</label>
				</div>
				<span className='login-organism__error'>error</span>
			</div>
			<ButtonAtom btnClass='button--loginPage' label='Log in' />

			<div className='login-organism__sign-up-box'>
				<span className='login-organism__sign-up-box-text'>
					Don't have an account?{' '}
					<Link to='/register'>
						<span className='login-organism__sign-up-box-text login-organism__sign-up-box-text--violet'>Sign up</span>
					</Link>
				</span>
			</div>
		</section>
	)
}

export default LoginOrganism
