import FlipMove from 'react-flip-move'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonAtom from '../../atoms/UI/ButtonAtom/ButtonAtom'
import './RegisterOrganism.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authAction } from '../../../store/slices/authSlice/authSlice'

const RegisterOrganism = (): JSX.Element => {
	const [isSent, setIsSent] = useState(false)
	const [passwordIsCorrect, setPasswordIsCorrect] = useState(false)
	const [nameIsCorrect, setNameIsCorrect] = useState(false)
	const [emailIsCorrect, setEmailIsCorrect] = useState(false)
	const [passwordErrors, setPasswordErrors] = useState<string[]>([])
	const [isButtonClicked, setIsButtonClicked] = useState(false)

	const nameRef = useRef<null | HTMLInputElement>(null)
	const emailRef = useRef<null | HTMLInputElement>(null)
	const passwordRef = useRef<null | HTMLInputElement>(null)
	const email = emailRef.current && emailRef.current.value
	const fullName = nameRef.current && nameRef.current!.value
	const password = passwordRef.current && passwordRef.current!.value
	const navigate = useNavigate()

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

		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/

		if (regex.test(password)) {
			setPasswordIsCorrect(true)
		} else {
			setPasswordIsCorrect(false)
		}

		setPasswordErrors(prevErrors => [])

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
			setPasswordErrors(prevErrors => [...prevErrors, 'The password must contain 6 characters.'])
		}

		if (password.length > 15) {
			setPasswordErrors(prevErrors => [...prevErrors, 'The password cannot exceed 15 characters.'])
		}
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

		if (!isSent) {
			checkNameLength()
			checkPassword()
			checkEmail()
			setIsSent(true)
		}

		if (nameIsCorrect && emailIsCorrect && passwordIsCorrect) {
			setIsButtonClicked(true)
		}
	}

	// const [xd, setxd] = useState(false)
	// const testHandler = () => {
	// 	setxd(!xd)
	// }

	const [backendError, setBackendError] = useState<string>('')

	const disptach = useDispatch()
	useEffect(() => {
		// && nameIsCorrect && emailIsCorrect && passwordIsCorrect
		if (isButtonClicked && nameIsCorrect && emailIsCorrect && passwordIsCorrect) {
			const registerUser = async () => {
				setIsButtonClicked(false)
				try {
					const response = await fetch('http://127.0.0.1:3001/register', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ email, fullName, password }),
					})

					const data = await response.json()
					if (data.error) {
						setBackendError(data.error)
					} else {
						localStorage.setItem('token', data.token)
						disptach(authAction.login())
						navigate('/')
					}
				} catch (error) {
					// setPasswordErrors(prevErrors => [...prevErrors, error as string])
				}
			}
			registerUser()
		} else {
			// setIsButtonClicked(false)
		}
	}, [isButtonClicked])

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
						{!emailIsCorrect && isSent && <span className='register-organism__error'>Email is incorrect</span>}
					</FlipMove>
				</div>
				<div className='register-organism__wrapper'>
					<div className='register-organism__input-wrapper'>
						<input
							type={false ? 'text' : 'password'}
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
							passwordErrors.map((el, index) => (
								<span key={index} className='register-organism__error'>
									{el}
								</span>
							))}
					</FlipMove>
					<span className='register-organism__error'>{backendError}</span>
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

			{/* <button onClick={testHandler}>as</button> */}
		</section>
	)
}

export default RegisterOrganism
