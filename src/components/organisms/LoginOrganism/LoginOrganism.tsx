import { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ButtonAtom } from '../../atoms'
import { authAction } from '../../../store/slices/authSlice/authSlice'
import './LoginOrganism.scss'

export const LoginOrganism = (): JSX.Element => {
	const [sent, setSent] = useState<boolean>(false)
	const emailRef = useRef<null | HTMLInputElement>(null)
	const passwordRef = useRef<null | HTMLInputElement>(null)
	const email = emailRef.current && emailRef.current.value
	const password = passwordRef.current && passwordRef.current.value
	const navigate = useNavigate()
	const disptach = useDispatch()

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSent(true)
	}

	useEffect(() => {
		if (sent) {
			setSent(false)
			const sendRequest = async () => {
				try {
					const response = await fetch('http://127.0.0.1:3001/login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ email, password }),
					})

					const data = await response.json()

					if (data.error) {
						// console.log(data.error)
						console.log(response.status)
					} else {
						localStorage.setItem('token', data.token)
						localStorage.setItem('email', email!)
						localStorage.setItem('name', data.name!)
						disptach(authAction.login())
						navigate('/')
					}
				} catch (error) {
					console.log(error)
				}
			}
			sendRequest()
		}
	}, [sent])
	return (
		<section className='login-organism'>
			<h2 className='login-organism__header'>Log in to your Udemy account</h2>
			<form noValidate onSubmit={submitHandler}>
				<div className='login-organism__wrapper'>
					<div className='login-organism__input-wrapper'>
						<input ref={emailRef} type='text' name='email' className='login-organism__input' required />
						<label className='login-organism__label' htmlFor='email'>
							Email
						</label>
					</div>
					<span className='login-organism__error'>error</span>
				</div>
				<div className='login-organism__wrapper'>
					<div className='login-organism__input-wrapper'>
						<input ref={passwordRef} type='password' name='password' className='login-organism__input' required />
						<label className='login-organism__label' htmlFor='password'>
							Password
						</label>
					</div>
					<span className='login-organism__error'>error</span>
				</div>

				<ButtonAtom btnClass='button--loginPage' label='Log in' />
			</form>

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

// // const navigate = useNavigate()
// const isLogin = useRouteLoaderData('root')
// if (isLogin) {
// 	redirect('/')
// }

// const [sent, setSent] = useState<boolean>(false)
// const emailRef = useRef<null | HTMLInputElement>(null)
// const passwordRef = useRef<null | HTMLInputElement>(null)
// const email = emailRef.current && emailRef.current.value
// const password = passwordRef.current && passwordRef.current.value

// const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
// 	e.preventDefault()
// 	setSent(true)
// }

// useEffect(() => {
// 	if (sent) {
// 		setSent(false)
// 		const sendRequest = async () => {
// 			try {
// 				const response = await fetch('http://127.0.0.1:3001/login', {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json',
// 					},
// 					body: JSON.stringify({ email, password }),
// 				})

// 				const data = await response.json()

// 				if (data.error) {
// 					// console.log(data.error)
// 					console.log(response.status)
// 				} else {
// 					localStorage.setItem('token', data.token)
// 					redirect('/')
// 				}
// 			} catch (error) {
// 				console.log(error)
// 			}
// 		}
// 		sendRequest()
// 	}
// }, [sent])
