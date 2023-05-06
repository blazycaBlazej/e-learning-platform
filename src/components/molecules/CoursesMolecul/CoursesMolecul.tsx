import Course from '../../atoms/CourseHomePageAtom/CourseHomePageAtom'
import FiltrCourseAtom from '../../atoms/FiltrCourseAtom/FiltrCourseAtom'
import ButtonAtom from '../../atoms/UI/ButtonAtom/ButtonAtom'
import './CoursesMolecul.scss'

const courses = [
	{
		img: '/assets/courses/1.jpg',
		name: 'Python for Financial Analysis Next and Algorithmic Trading',
		lessonsNumber: 10,
		category: 'Design',
		author: 'Adam Smith',
		authorImg: '/assets/author.png',
		dousuniecia: 'Python Developer',
		evaluation: 4,
	},
	{
		img: '/assets/courses/2.jpg',
		name: 'Python for Financial Analysis Next and Algorithmic Trading',
		lessonsNumber: 10,
		category: 'Design',
		author: 'Adam Smith',
		authorImg: '/assets/author.png',
		dousuniecia: 'Python Developer',
		evaluation: 4,
	},
	{
		img: '/assets/courses/3.jpg',
		name: 'Python for Financial Analysis Next and Algorithmic Trading',
		lessonsNumber: 10,
		category: 'Design',
		author: 'Adam Smith',
		authorImg: '/assets/author.png',
		dousuniecia: 'Python Developer',
		evaluation: 4,
	},
	{
		img: '/assets/courses/4.jpg',
		name: 'Python for Financial Analysis Next and Algorithmic Trading',
		lessonsNumber: 10,
		category: 'Design',
		author: 'Adam Smith',
		authorImg: '/assets/author.png',
		dousuniecia: 'Python Developer',
		evaluation: 4,
	},
	{
		img: '/assets/courses/5.jpg',
		name: 'Python for Financial Analysis Next and Algorithmic Trading',
		lessonsNumber: 10,
		category: 'Design',
		author: 'Adam Smith',
		authorImg: '/assets/author.png',
		dousuniecia: 'Python Developer',
		evaluation: 4,
	},
	{
		img: '/assets/courses/6.jpg',
		name: 'Python for Financial Analysis Next and Algorithmic Trading',
		lessonsNumber: 10,
		category: 'Design',
		author: 'Adam Smith',
		authorImg: '/assets/author.png',
		dousuniecia: 'Python Developer',
		evaluation: 4,
	},
]

const CoursesMolecul = (): JSX.Element => {
	return (
		<div className='courses-molecul'>
			<div className='courses-molecul__header-box'>
				<span className='courses-molecul__header'>
					Popular <span className='courses-molecul__header--violet'>Courses</span>
				</span>
				<FiltrCourseAtom />
			</div>

			<div className='courses-molecul__content'>
				{courses.map(el => (
					<Course
						img={el.img}
						name={el.name}
						lessonsNumber={el.lessonsNumber}
						category={el.category}
						author={el.author}
						authorImg={el.authorImg}
						dousuniecia={el.dousuniecia}
						evaluation={el.evaluation}
					/>
				))}
			</div>

			<div className="courses-molecul__btn-cointainer">
				<ButtonAtom label="Explore all Courses" btnClass='button--allCourse'/>
			</div>
		</div>
	)
}

export default CoursesMolecul
