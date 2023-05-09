import HomeCategoryAtom from '../../../atoms/Home/HomeCategoryAtom/HomeCategoryAtom'
import './HomeCategoriesMolecul.scss'

const HomeCategoriesMolecul = (): JSX.Element => {
	return (
		<section className='home-categories-molecul'>
			<h2 className='home-categories-molecul__header'>Top categories</h2>
			<div className='home-categories-molecul__wrapper'>
				<div className='home-categories-molecul__element'>
					<HomeCategoryAtom
						label='Design'
						img='https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg'
					/>
				</div>
				<div className='home-categories-molecul__element'>
					<HomeCategoryAtom
						label='Development'
						img='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg'
					/>
				</div>
				<div className='home-categories-molecul__element'>
					<HomeCategoryAtom
						label='Marketing'
						img='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg'
					/>
				</div>
				<div className='home-categories-molecul__element'>
					<HomeCategoryAtom
						label='IT and Software'
						img='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg'
					/>
				</div>
				<div className='home-categories-molecul__element'>
					<HomeCategoryAtom
						label='Personal Development'
						img='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg'
					/>
				</div>
				<div className='home-categories-molecul__element'>
					<HomeCategoryAtom
						label='Business'
						img='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg'
					/>
				</div>
				<div className='home-categories-molecul__element'>
					<HomeCategoryAtom
						label='Photography'
						img='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg'
					/>
				</div>
				<div className='home-categories-molecul__element'>
					<HomeCategoryAtom label='Music' img='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' />
				</div>
			</div>
		</section>
	)
}

export default HomeCategoriesMolecul
