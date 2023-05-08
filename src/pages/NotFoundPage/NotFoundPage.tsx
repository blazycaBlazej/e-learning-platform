import MenuOrganism from '../../components/organisms/MenuOrganism/MenuOrganism'
import './NotFoundPage.scss'

const NotFoundPage = (): JSX.Element => {
	return (
		<section className='not-found-page'>
			<MenuOrganism />
			<div className='not-found-page__content'>
				<div className='not-found-page__img-wrapper'>
					<img src='https://s.udemycdn.com/error_page/error-desktop-v1.jpg' alt='404' className='not-found-page__img' />
				</div>

				<h1 className='not-found-page__header'>We can’t find the page you’re looking for</h1>
				<p className='not-found-page__description'>Visit our support page for further assistance.</p>
			</div>
		</section>
	)
}

export default NotFoundPage
