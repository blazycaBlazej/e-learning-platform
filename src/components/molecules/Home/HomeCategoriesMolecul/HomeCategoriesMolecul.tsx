import { Link } from 'react-router-dom'
import HomeCategoryAtom from '../../../atoms/Home/HomeCategoryAtom/HomeCategoryAtom'
import './HomeCategoriesMolecul.scss'

const HomeCategoriesMolecul = (): JSX.Element => {
	return (
		<section className='home-categories-molecul'>
			<h2 className='home-categories-molecul__header'>Top categories</h2>
			<div className='home-categories-molecul__wrapper'>
				<div className='home-categories-molecul__element'>
					<Link to='courses/design'>
						<HomeCategoryAtom
							label='Design'
							img='https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg'
						/>
					</Link>
				</div>

				<div className='home-categories-molecul__element'>
					<Link to='courses/development'>
						<HomeCategoryAtom
							label='Development'
							img='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg'
						/>
					</Link>
				</div>
				<div className='home-categories-molecul__element'>
					<Link to='courses/marketing'>
						<HomeCategoryAtom
							label='Marketing'
							img='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg'
						/>
					</Link>
				</div>
				<div className='home-categories-molecul__element'>
					<Link to='courses/it-and-software'>
						<HomeCategoryAtom
							label='IT and Software'
							img='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg'
						/>
					</Link>
				</div>
				<div className='home-categories-molecul__element'>
					<Link to='courses/personal-development'>
						<HomeCategoryAtom
							label='Personal Development'
							img='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg'
						/>
					</Link>
				</div>
				<div className='home-categories-molecul__element'>
					<Link to='courses/business'>
						<HomeCategoryAtom
							label='Business'
							img='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg'
						/>
					</Link>
				</div>
				<div className='home-categories-molecul__element'>
					<Link to='courses/photography'>
						<HomeCategoryAtom
							label='Photography'
							img='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg'
						/>
					</Link>
				</div>
				<div className='home-categories-molecul__element'>
					<Link to='courses/music'>
						<HomeCategoryAtom
							label='Music'
							img='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg'
						/>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HomeCategoriesMolecul
