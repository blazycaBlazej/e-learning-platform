import './HomeCategoryAtom.scss'

interface HomeCategoryAtomProps {
	label: string
	img: string
}

const HomeCategoryAtom = ({ label, img }: HomeCategoryAtomProps): JSX.Element => {
	return (
		<div className='home-category-atom'>
			<div className='home-category-atom__wrapper'>
				<img src={img} alt={label} loading='lazy' className='home-category-atom__img' />
			</div>
			<span className='home-category-atom__label'>{label}</span>
		</div>
	)
}

export default HomeCategoryAtom
