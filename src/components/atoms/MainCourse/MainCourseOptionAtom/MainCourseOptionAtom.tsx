import { IconCertificate, IconDevices, IconInfinity, IconHeart, IconHeartFilled } from '@tabler/icons-react'

import ButtonAtom from '../../UI/ButtonAtom/ButtonAtom'
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

const MainCourseOptionAtom = ({ price, img, name, id }: MainCourseOptionAtomProps): JSX.Element => {
	const isLogin = useSelector((state: StateRoot) => state.auth.isLogin)
	const token = localStorage.getItem('token')
	const navigate = useNavigate()
	const [isFollow, setIsFollow] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const clickHandler = () => {
		if (!isLogin) {
			navigate('/login')
		}
	}

	const checkWishList = async () => {
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
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const clickFollowHandler = () => {
		if (!isLogin) {
			navigate('/login')
		} else {
			const addFollow = async () => {
				try {
					setIsLoading(true)
					await fetch('http://127.0.0.1:3001/toggleWishList', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							authorization: `Beer ${token}`,
						},
						body: JSON.stringify({ token, id }),
					})
					checkWishList()
				} catch (error) {
					console.log(error)
				}
			}
			addFollow()
		}
	}

	useEffect(() => {
		checkWishList()
	}, [])

	return (
		<section className='main-course-option-atom'>
			<div className='main-course-option-atom__img-wrapper'>
				<img className='main-course-option-atom__img' loading='lazy' src={img} alt={name} />
			</div>
			<div className='main-course-option-atom__content'>
				<span className='main-course-option-atom__price'>${price}</span>

				<div className='main-course-option-atom__btns'>
					<div className='main-course-option-atom__btns-row'>
						<div onClick={clickHandler}>
							<ButtonAtom label='Buy' btnClass='button--buy' />
						</div>
						<div onClick={clickFollowHandler}>
							<ButtonAtom
								label={
									isLogin ? (
										isLoading ? (
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
						<ButtonAtom label='Add to followed' btnClass='button--to-follow' />
					</div>
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
