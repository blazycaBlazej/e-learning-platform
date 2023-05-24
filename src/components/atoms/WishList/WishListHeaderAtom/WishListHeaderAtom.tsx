import './WishListHeaderAtom.scss'

interface WishListHeaderAtomProps {
	type: string
}

export const WishListHeaderAtom = ({ type }: WishListHeaderAtomProps): JSX.Element => {
	return (
		<section className='wish-list-header-atom'>
			<div className='wish-list-header-atom__content'>
				<h1 className='wish-list-header-atom__header'>
					{type === 'wishlist' ? 'Wishlist' : type === 'myCourse' ? 'My Learning' : 'Instructor Courses'}
				</h1>
			</div>
		</section>
	)
}
