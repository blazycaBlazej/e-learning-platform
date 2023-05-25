import { HomeHeaderAtom } from '../../components/atoms'
import { HomeCategoriesMolecul } from '../../components/molecules'
import './HomePage.scss'

export const HomePage = (): JSX.Element => {
	return (
		<main className='home-page'>
			<HomeHeaderAtom />
			<HomeCategoriesMolecul />
		</main>
	)
}

export default HomePage
