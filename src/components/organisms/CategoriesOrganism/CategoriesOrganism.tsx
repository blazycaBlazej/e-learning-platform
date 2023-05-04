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
			<div className='categories-organism__content' data-aos='zoom-in'>
				<div className='categories-organism__element'>
					<IconCut color='white' size={28} />
					<span className='categories-organism__label'>Design</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element' data-aos='zoom-in'>
					<IconStack color='white' size={28} />
					<span className='categories-organism__label'>Development</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element' data-aos='zoom-in'>
					<IconStack3 color='white' size={28} />
					<span className='categories-organism__label'>Professional Dev.</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element' data-aos='zoom-in'>
					<IconPhoto color='white' size={28} />
					<span className='categories-organism__label'>Photography</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element' data-aos='zoom-in'>
					<IconDatabase color='white' size={28} />
					<span className='categories-organism__label'>Data Science</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element' data-aos='zoom-in'>
					<IconChartPie color='white' size={28} />
					<span className='categories-organism__label'>Business</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element' data-aos='zoom-in'>
					<IconTimeline color='white' size={28} />
					<span className='categories-organism__label'>Marketing</span>
					<div className='categories-organism__arrow-cointainer'>
						<div className='categories-organism__arrow'>
							<IconArrowUpRight color='white' size={28} />
						</div>
					</div>
				</div>
				<div className='categories-organism__element' data-aos='zoom-in'>
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
