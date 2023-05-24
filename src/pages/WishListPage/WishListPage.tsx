import { WishListOrganism } from '../../components/organisms/WishListOrganism/WishListOrganism'
import './WishListPage.scss'

export const WishListPage = (): JSX.Element => {
	return (
		<section className='wish-list-page'>
			<WishListOrganism />
		</section>
	)
}
