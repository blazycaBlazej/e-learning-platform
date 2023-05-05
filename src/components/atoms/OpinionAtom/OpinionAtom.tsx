import {
	IconArrowNarrowLeft,
	IconArrowNarrowRight,
	IconStarFilled,
	IconStarHalfFilled,
	IconStar,
} from '@tabler/icons-react'
import './OpinionAtom.scss'

interface OpinionAtomProps {
	author: string
	img: string
	prof: string
	opinion: string
	rating: number
	next: () => void
	prev: () => void
}

const OpinionAtom = ({ author, img, prof, opinion, rating, next, prev }: OpinionAtomProps): JSX.Element => {
	const nextHandler = () => {
		next()
	}

	return (
		<section className='opinion-atom' data-aos='zoom-in'>
			<div className='opinion-atom__header'>
				<div className='opinion-atom__flex-row'>
					<img src={img} className='opinion-atom__user-image' />

					<div className='opinion-atom__flex-column'>
						<span className='opinion-atom__user-name'>{author}</span>
						<span className='opinion-atom__user-prof'>{prof}</span>
					</div>
				</div>
				<div className='opinion-atom__rating'>
					{rating >= 1 ? (
						<IconStarFilled className='opinion-atom__gold-star' size={18} stroke={3} />
					) : rating >= 0.5 ? (
						<IconStarHalfFilled className='opinion-atom__gold-star' size={18} />
					) : (
						<IconStar className='opinion-atom__gray-star' size={18} />
					)}
					{rating >= 2 ? (
						<IconStarFilled className='opinion-atom__gold-star' size={18} />
					) : rating >= 1.5 ? (
						<IconStarHalfFilled className='opinion-atom__gold-star' size={18} />
					) : (
						<IconStar className='opinion-atom__gray-star' size={18} />
					)}
					{rating >= 3 ? (
						<IconStarFilled className='opinion-atom__gold-star' size={18} />
					) : rating >= 2.5 ? (
						<IconStarHalfFilled className='opinion-atom__gold-star' size={18} />
					) : (
						<IconStar className='opinion-atom__gray-star' size={18} />
					)}
					{rating >= 4 ? (
						<IconStarFilled className='opinion-atom__gold-star' size={18} />
					) : rating >= 3.5 ? (
						<IconStarHalfFilled className='opinion-atom__gold-star' size={18} />
					) : (
						<IconStar className='opinion-atom__gray-star' size={18} />
					)}
					{rating >= 5 ? (
						<IconStarFilled className='opinion-atom__gold-star' size={18} />
					) : rating >= 4.5 ? (
						<IconStarHalfFilled className='opinion-atom__gold-star' size={18} />
					) : (
						<IconStar className='opinion-atom__gray-star' size={18} />
					)}
				</div>
			</div>

			<p className='opinion-atom__opinion'>{opinion}</p>

			<div className='opinion-atom__option'>
				<div className='opinion-atom__option-element'>
					<IconArrowNarrowLeft color='white' size={40} onClick={prev} />
				</div>
				<div className='opinion-atom__option-element'>
					<IconArrowNarrowRight color='white' size={40} onClick={next} />
				</div>
			</div>
		</section>
	)
}

export default OpinionAtom
