import { IconSchool, IconUsers, IconVideo } from '@tabler/icons-react'
import './DifferenceOrganism.scss'
const DifferenceOrganism = (): JSX.Element => {
	return (
		<div className='difference-organism'>
			<div className='difference-organism__content'>
				<img className='difference-organism__image' src='./assets/femaleStudent.png' alt='' data-aos='fade-right' />

				<div className='difference-organism__text' data-aos='fade-left'>
					<h3 className='difference-organism__header'>
						What is our <span className='difference-organism__header--violet'>difference</span>
					</h3>
					<p className='difference-organism__description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. ex ea commodo consequat.
						<br />
						ut labore et dolore magna aliqua. ex ea commodo consequat.
					</p>
					<div className='difference-organism__stats-cointainer'>
						<div className='difference-organism__stats'>
							<div className='difference-organism__stats-icon'>
								<IconSchool size={38} />
							</div>
							<div className='difference-organism__flex-container--row'>
								<div className='difference-organism__stats-header'>300</div>
								<div className='difference-organism__stats-description'>Instructor</div>
							</div>
						</div>
						<div className='difference-organism__stats'>
							<div className='difference-organism__stats-icon'>
								<IconUsers size={38} />
							</div>
							<div className='difference-organism__flex-container--row'>
								<div className='difference-organism__stats-header'>20,000+</div>
								<div className='difference-organism__stats-description'>Student</div>
							</div>
						</div>
						<div className='difference-organism__stats'>
							<div className='difference-organism__stats-icon'>
								<IconVideo size={38} />
							</div>

							<div className='difference-organism__flex-container--row'>
								<span className='difference-organism__stats-header'>10,000+</span>
								<span className='difference-organism__stats-description'>Video</span>
							</div>
						</div>
					</div>
				</div>
				<div className='difference-organism__shadow'></div>
			</div>
		</div>
	)
}

export default DifferenceOrganism
