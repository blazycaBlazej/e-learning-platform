import './WishListHeaderAtom.scss'

interface WishListHeaderAtomProps {
	type: string
}

const WishListHeaderAtom = ({ type }: WishListHeaderAtomProps): JSX.Element => {
	return (
		<section className='wish-list-header-atom'>
			<div className='wish-list-header-atom__content'>
				<h1 className='wish-list-header-atom__header'>{type === 'wishlist' ? 'Wishlist' : 'My learning'}</h1>
			</div>
		</section>
	)
}

export default WishListHeaderAtom
