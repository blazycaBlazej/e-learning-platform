import './ButtonAtom.scss'

interface ButtonAtomProps {
	label: string | JSX.Element
	btnClass: string
}

export const ButtonAtom = ({ label, btnClass }: ButtonAtomProps): JSX.Element => {
	return (
		<button className={`button ${btnClass}`}>
			<span className='button__string'>{label}</span>
		</button>
	)
}
