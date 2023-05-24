import { WishListOrganism } from '../../components/organisms'
import './WishListPage.scss'

export const WishListPage = (): JSX.Element => {
	return (
		<section className='wish-list-page'>
			<WishListOrganism />
		</section>
	)
}
