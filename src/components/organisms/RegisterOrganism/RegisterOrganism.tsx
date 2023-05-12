import FlipMove from 'react-flip-move'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonAtom from '../../atoms/UI/ButtonAtom/ButtonAtom'
import './RegisterOrganism.scss'

const RegisterOrganism = (): JSX.Element => {
	const [isSent, setIsSent] = useState(false)
	const [passwordIsCorrect, setPasswordIsCorrect] = useState(false)
	const [nameIsCorrect, setNameIsCorrect] = useState(false)
	const [emailIsCorrect, setEmailIsCorrect] = useState(false)
	const [passwordErros, setPasswordErrors] = useState([''])
	const nameRef = useRef<null | HTMLInputElement>(null)
	const emailRef = useRef<null | HTMLInputElement>(null)
	const passwordRef = useRef<null | HTMLInputElement>(null)

	const checkNameLength = () => {
		if (nameRef.current!.value.trim().length > 2) {
			setNameIsCorrect(true)
		} else {
			setNameIsCorrect(false)
		}
	}

	const checkEmail = () => {
		const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		if (regexEmail.test(emailRef.current!.value)) {
			setEmailIsCorrect(true)
		} else {
			setEmailIsCorrect(false)
		}
	}

	const checkPassword = () => {
		const regexSpecial = /(?=.*[@$!%*?&])/
		const regexNumber = /(?=.*\d)/
		const regexBigLetter = /(?=.*[A-Z])/
		const regexSmallLetter = /(?=.*[a-z])/
		const password = passwordRef.current!.value
		setPasswordErrors(prevErrors => [''])

		if (!regexSpecial.test(password)) {
			setPasswordErrors(prevErrors => [...prevErrors, `The password must contain (e.g., @, $, !, %, *, ?, &).`])
		}

		if (!regexNumber.test(password)) {
			setPasswordErrors(prevErrors => [...prevErrors, `The password must contain a digit.`])
		}

		if (!regexBigLetter.test(password)) {
			setPasswordErrors(prevErrors => [...prevErrors, `The password must contain an uppercase letter.`])
		}

		if (!regexSmallLetter.test(password)) {
			setPasswordErrors(prevErrors => [...prevErrors, `The password must contain a lowercase letter.`])
		}
		if (password.length < 6) {
			// errors.push('haslo musi zawierac 6 znakow')
			setPasswordErrors(prevErrors => [...prevErrors, 'The password must contain 6 characters.'])
		}
		if (password.length > 15) {
			// errors.push('haslo nie moze zawierac wiecej 15')
			setPasswordErrors(prevErrors => [...prevErrors, 'The password cannot exceed 15 characters.'])
		}

		passwordErros.length === 0 ? setPasswordIsCorrect(true) : setPasswordIsCorrect(false)
	}

	const changeNameHandler = () => {
		if (isSent) checkNameLength()
	}

	const changeEmailHandler = () => {
		if (isSent) checkEmail()
	}

	const changePasswordHandler = () => {
		if (isSent) checkPassword()
	}

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()
		setIsSent(true)
		checkNameLength()
		checkEmail()
		checkPassword()
	}
	const [xd, setxd] = useState(false)
	const testHandler = () => {
		setxd(!xd)
	}

	return (
		<section className='register-organism'>
			<h2 className='register-organism__header'>Sign up and start learning</h2>
			<form onSubmit={submitHandler} noValidate>
				<div className='register-organism__wrapper'>
					<div className='register-organism__input-wrapper'>
						<input
							type='text'
							name='name'
							className='register-organism__input'
							required
							ref={nameRef}
							onChange={changeNameHandler}
						/>
						<label className='register-organism__label' htmlFor='name'>
							Full name
						</label>
					</div>
					<FlipMove duration={300} enterAnimation='elevator' leaveAnimation='elevator'>
						{!nameIsCorrect && isSent && (
							<span className='register-organism__error'>Name must have at least 3 characters</span>
						)}
					</FlipMove>
				</div>
				<div className='register-organism__wrapper'>
					<div className='register-organism__input-wrapper'>
						<input
							type='text'
							name='email'
							className='register-organism__input'
							required
							ref={emailRef}
							onChange={changeEmailHandler}
						/>
						<label className='register-organism__label' htmlFor='email'>
							Email
						</label>
					</div>

					<FlipMove duration={300} enterAnimation='elevator' leaveAnimation='elevator'>
						{!emailIsCorrect && isSent && <span className='register-organism__error'>'Email is incorrect'</span>}
					</FlipMove>
				</div>
				<div className='register-organism__wrapper'>
					<div className='register-organism__input-wrapper'>
						<input
							type={xd ? 'text' : 'password'}
							name='password'
							className='register-organism__input'
							required
							ref={passwordRef}
							onChange={changePasswordHandler}
						/>
						<label className='register-organism__label' htmlFor='password'>
							Password
						</label>
					</div>

					<FlipMove duration={300} staggerDelayBy={75} enterAnimation='elevator' leaveAnimation='elevator'>
						{!passwordIsCorrect &&
							isSent &&
							passwordErros.map((el, index) => (
								<span key={index} className='register-organism__error'>
									{el}
								</span>
							))}
					</FlipMove>
				</div>
				<div className='register-organism__btn'>
					<ButtonAtom btnClass='button--registerPage' label='Sign up' />
				</div>
			</form>
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
			<button onClick={testHandler}>as</button>
		</section>
	)
}

export default RegisterOrganism
