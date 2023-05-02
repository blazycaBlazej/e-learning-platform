import {
	IconArrowUpRight,
	IconCut,
	IconStack,
	IconStack3,
	IconPhoto,
	IconDatabase,
	IconChartPie,
	IconTimeline,
	IconMusic,
} from '@tabler/icons-react'
import './CategoriesOrganism.scss'

const CategoriesOrganism = (): JSX.Element => {
	return (
		<div className='categories-organism'>
			<span className='categories-organism__header'>
				Most Popular<span className='categories-organism__header--violet'>&nbsp;Category</span>
			</span>
			<div className='categories-organism__content'>
				<div className='categories-organism__element'>
					<IconCut color='white' size={28} />
					<span className='categories-organism__label'>Design</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element'>
					<IconStack color='white' size={28} />
					<span className='categories-organism__label'>Development</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element'>
					<IconStack3 color='white' size={28} />
					<span className='categories-organism__label'>Professional Dev.</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element'>
					<IconPhoto color='white' size={28} />
					<span className='categories-organism__label'>Photography</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element'>
					<IconDatabase color='white' size={28} />
					<span className='categories-organism__label'>Data Science</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element'>
					<IconChartPie color='white' size={28} />
					<span className='categories-organism__label'>Business</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element'>
					<IconTimeline color='white' size={28} />
					<span className='categories-organism__label'>Marketing</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element'>
					<IconMusic color='white' size={28} />
					<span className='categories-organism__label'>Music</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CategoriesOrganism
