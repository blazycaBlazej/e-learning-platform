import { HomeCategoryAtom } from '../../components/atoms/Home/HomeCategoryAtom/HomeCategoryAtom'
import { HomeHeaderAtom } from '../../components/atoms/Home/HomeHeaderAtom/HomeHeaderAtom'
import { HomeCategoriesMolecul } from '../../components/molecules/Home/HomeCategoriesMolecul/HomeCategoriesMolecul'
import './HomePage.scss'

export const HomePage = (): JSX.Element => {
	return (
		<main className='home-page'>
			<HomeHeaderAtom />
			<HomeCategoriesMolecul />
		</main>
	)
}
