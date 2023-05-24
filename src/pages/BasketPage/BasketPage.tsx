import { Link } from 'react-router-dom'
import { ButtonAtom } from '../../components/atoms' 
import './BasketPage.scss'

export const BasketPage = (): JSX.Element => {
	return (
		<section className='basket-page'>
			<h1 className='basket-page__header'>Shopping Cart</h1>
			<span className='basket-page__numbers-item'>0 Courses in Cart</span>

			<div className='basket-page__basket'>
				<div className='basket-page__img-wrapper'>
					<img
						loading='lazy'
						alt='basket'
						className='basket-page__img'
						data-purpose='empty-cart-display'
						src='https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg'
					/>
				</div>
				<p className='basket-page__description'>Your cart is empty. Keep shopping to find a course!</p>
				<Link to='..'>
					<ButtonAtom label='Keep shopping' btnClass='button--basketBtn' />
				</Link>
			</div>
		</section>
	)
}
