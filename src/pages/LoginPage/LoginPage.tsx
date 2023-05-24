import { LoginOrganism } from '../../components/organisms/LoginOrganism/LoginOrganism'
import './LoginPage.scss'

export const LoginPage = (): JSX.Element => {
	return (
		<section className='login-page'>
			<LoginOrganism />
		</section>
	)
}
