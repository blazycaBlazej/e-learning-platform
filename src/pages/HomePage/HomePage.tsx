import HomeHeaderAtom from '../../components/atoms/Home/HomeHeaderAtom/HomeHeaderAtom'
import './HomePage.scss'

const HomePage = (): JSX.Element => {
	return (
		<main className='home-page'>
			<HomeHeaderAtom />
		</main>
	)
}

export default HomePage
