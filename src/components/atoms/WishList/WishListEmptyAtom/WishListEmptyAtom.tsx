import { Link } from 'react-router-dom'
import ButtonAtom from '../../UI/ButtonAtom/ButtonAtom'
import './WishListEmptyAtom.scss'

interface WishListEmptyAtomProps {
	type: string
}

const WishListEmptyAtom = ({ type }: WishListEmptyAtomProps): JSX.Element => {
	return (
		<section className='wish-list-empty-atom'>
			<p className='wish-list-empty-atom__text'>
				{type === 'wishlist'
					? localStorage.getItem('name') + ' you have not added courses to your wishlist'
					: type === 'myCourse'
					? `You haven't bought any courses yet`
					: 'You have not created any course'}
			</p>
			{type !== 'instructorCourses' ? (
				<Link to='/courses'>
					<div className='wish-list-empty-atom__btn'>
						<ButtonAtom btnClass='button--basketBtn' label='Browse courses' />
					</div>
				</Link>
			) : null}
		</section>
	)
}

export default WishListEmptyAtom
