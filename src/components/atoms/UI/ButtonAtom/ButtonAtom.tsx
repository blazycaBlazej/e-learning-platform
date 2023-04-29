import './ButtonAtom.scss'

interface ButtonAtomProps {
	label: string
	btnClass: string
}

const ButtonAtom = ({ label, btnClass }: ButtonAtomProps): JSX.Element => {
	return (
		<button className={`button ${btnClass}`}>
			<span className='button__string'>{label}</span>
		</button>
	)
}

export default ButtonAtom
