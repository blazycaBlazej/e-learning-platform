import {
	IconCertificate,
	IconDevices,
	IconInfinity,
	IconHeart,
	IconHeartFilled,
	IconInfoCircleFilled,
} from '@tabler/icons-react'

import { ButtonAtom } from '../../UI' 
import './MainCourseOptionAtom.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'

interface MainCourseOptionAtomProps {
	price: number
	id: number
	img: string
	name: string
}

interface StateRoot {
	auth: {
		isLogin: boolean
	}
}

export const MainCourseOptionAtom = ({ price, img, name, id }: MainCourseOptionAtomProps): JSX.Element => {
	const isLogin = useSelector((state: StateRoot) => state.auth.isLogin)
	const token = localStorage.getItem('token')
	const navigate = useNavigate()
	const [isFollow, setIsFollow] = useState<boolean>(false)
	const [isPurchased, setIsPurchased] = useState<boolean>(false)
	const [isFollowLoading, setFollowIsLoading] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isAuthor, setIsAuthor] = useState<boolean>(false)

	const clickHandler = () => {
		if (!isLogin) {
			navigate('/login')
		}
	}

	const checkIsAuthor = async () => {
		if (isLogin) {
			try {
				const response = await fetch('http://127.0.0.1:3001/isAuthor', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						authorization: `Beer ${token}`,
					},
					body: JSON.stringify({ id }),
				})

				const data = await response.json()

				data.isAuthor === true ? setIsAuthor(true) : setIsAuthor(false)
			} catch (error) {
				console.log(error)
			}
		}
	}

	const checkWishList = async () => {
		if (isLogin) {
			setFollowIsLoading(true)
			try {
				const response = await fetch('http://127.0.0.1:3001/getWishListItems', {
					headers: {
						'Content-Type': 'application/json',
						authorization: `Beer ${token}`,
					},
				})

				const data = await response.json()
				// console.log(data)
				let isFollow
				if (data.includes(' ')) {
					const dataArray = data.split(' ')
					isFollow = dataArray.filter((el: string) => el === String(id))
				} else {
					isFollow = data
				}

				String(isFollow) === String(id) ? setIsFollow(true) : setIsFollow(false)
			} catch (error) {
				console.log(error)
			}
			setFollowIsLoading(false)
		}
	}

	const checkPurchasedCourse = async () => {
		if (isLogin) {
			setIsLoading(true)
			try {
				const response = await fetch('http://127.0.0.1:3001/getPurchasedCourse', {
					headers: {
						'Content-Type': 'application/json',
						authorization: `Beer ${token}`,
					},
				})

				const data = await response.json()
				let isPurchased
				if (data.includes(' ')) {
					const dataArray = data.split(' ')
					isPurchased = dataArray.filter((el: string) => el === String(id))
				} else {
					isPurchased = data
				}
				console.log(isPurchased)

				String(isPurchased) === String(id) ? setIsPurchased(true) : setIsPurchased(false)
			} catch (error) {
				console.log(error)
			}
			setIsLoading(false)
		}
	}

	const clickFollowHandler = () => {
		if (!isLogin) {
			navigate('/login')
		} else {
			const addFollow = async () => {
				setFollowIsLoading(true)
				try {
					await fetch('http://127.0.0.1:3001/toggleWishList', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							authorization: `Beer ${token}`,
						},
						body: JSON.stringify({ token, id }),
					})
					// checkWishList()
					setIsFollow(!isFollow)
				} catch (error) {
					console.log(error)
				}
				setFollowIsLoading(false)
			}
			addFollow()
		}
	}

	const clickBuyHandler = () => {
		if (!isLogin) {
			navigate('/login')
		} else {
			const buyCourse = async () => {
				setIsLoading(true)
				try {
					await fetch('http://127.0.0.1:3001/buyCourse', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							authorization: `Beer ${token}`,
						},
						body: JSON.stringify({ id }),
					})
					setIsPurchased(true)
				} catch (error) {
					console.log(error)
				}
				setIsLoading(false)
			}
			buyCourse()
		}
	}

	useEffect(() => {
		checkIsAuthor()
		checkPurchasedCourse()
		checkWishList()
	}, [])

	return (
		<section className='main-course-option-atom'>
			<div className='main-course-option-atom__img-wrapper'>
				<img className='main-course-option-atom__img' loading='lazy' src={img} alt={name} />
			</div>
			<div className='main-course-option-atom__content'>
				{isPurchased ? null : <span className='main-course-option-atom__price'>${price}</span>}

				<div className='main-course-option-atom__btns'>
					{isLoading ? (
						<div className='main-course-option-atom__spinner'>
							<RotatingLines strokeColor='grey' strokeWidth='5' animationDuration='0.75' width='78' visible={true} />
						</div>
					) : isAuthor ? (
						<ButtonAtom label='Edit' btnClass='button--to-follow' />
					) : isPurchased ? (
						<div className='main-course-option-atom__purchased'>
							<div className='main-course-option-atom__purchased-row'>
								<IconInfoCircleFilled />
								<p className='main-course-option-atom__purchased-text'>You purchased this course</p>
							</div>
							<ButtonAtom label='Go to course' btnClass='button--go-to-course' />
						</div>
					) : (
						<>
							<div className='main-course-option-atom__btns-row'>
								<div onClick={clickBuyHandler}>
									<ButtonAtom label='Buy' btnClass='button--buy' />
								</div>
								<div onClick={clickFollowHandler}>
									<ButtonAtom
										label={
											isLogin ? (
												isFollowLoading ? (
													<RotatingLines
														strokeColor='grey'
														strokeWidth='5'
														animationDuration='0.75'
														width='24'
														visible={true}
													/>
												) : isFollow ? (
													<IconHeartFilled />
												) : (
													<IconHeart />
												)
											) : (
												<IconHeart />
											)
										}
										btnClass='button--follow'
									/>
								</div>
							</div>
							<div onClick={clickHandler}>
								<ButtonAtom label='Add to basket' btnClass='button--to-follow' />
							</div>
						</>
					)}
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


