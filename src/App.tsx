import LogoAtom from './components/atoms/LogoAtom/LogoAtom'

import './App.css'
import ButtonAtom from './components/atoms/ButtonAtom/ButtonAtom'

function App() {
	return (
		<div className='App'>
			<LogoAtom />
			<ButtonAtom label={'Login'} btnClass='button--login' />
			<ButtonAtom label={'Get Started'} btnClass='button--register' />
		</div>
	)
}

export default App
