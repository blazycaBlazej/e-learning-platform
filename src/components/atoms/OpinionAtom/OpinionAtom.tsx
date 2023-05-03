import { IconArrowNarrowLeft, IconArrowNarrowRight, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'
import './OpinionAtom.scss'

interface OpinionAtomProps {
	author: string
	prof: string
	opinion: string
}

const OpinionAtom = ({ author, prof, opinion }: OpinionAtomProps): JSX.Element => {
	return (
		<div className='opinion-atom'>
			<div className='opinion-atom__header'>
				<div className='opinion-atom__flex-row'>
					<img src='./assets/testimonials/5.png' className='opinion-atom__user-image' />

					<div className='opinion-atom__flex-column'>
						<span className='opinion-atom__user-name'>{author}</span>
						<span className='opinion-atom__user-prof'>{prof}</span>
					</div>
				</div>
				<div className='opinion-atom__rating'>
					<IconStarFilled color='FAB437' size={18} />
					<IconStarFilled color='FAB437' size={18} />
					<IconStarFilled color='FAB437' size={18} />
					<IconStarFilled color='FAB437' size={18} />
					<IconStarFilled color='FAB437' size={18} />
				</div>
			</div>

			<p className='opinion-atom__opinion'>{opinion}</p>

			<div className='opinion-atom__option'>
				<div className='opinion-atom__option-element'>
					<IconArrowNarrowLeft color='white' size={40} />
				</div>
				<div className='opinion-atom__option-element'>
					<IconArrowNarrowRight color='white' size={40} />
				</div>
			</div>
		</div>
	)
}

export default OpinionAtom
