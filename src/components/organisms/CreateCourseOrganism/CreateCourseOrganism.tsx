import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonAtom } from '../../atoms'
import './CreateCourseOrganism.scss'

export const CreateCourseOrganism = (): JSX.Element => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [requirements, setRequirements] = useState('')
	const [category, setCategory] = useState('')

	const [nameError, setNameError] = useState(false)
	const [descriptionError, setDescriptionError] = useState(false)
	const [requirementsError, setRequirementsError] = useState(false)
	const [categoryError, setCategoryError] = useState(false)
	const navigate = useNavigate()
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		name ? setNameError(false) : setNameError(true)
		description ? setDescriptionError(false) : setDescriptionError(true)
		requirements ? setRequirementsError(false) : setRequirementsError(true)
		category ? setCategoryError(false) : setCategoryError(true)

		if (name && description && requirements && category) {
			const addCourse = async () => {
				const response = await fetch('https://test-fb3k.onrender.com/addCourse', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						authorization: `Beer ${localStorage.getItem('token')}`,
					},
					body: JSON.stringify({ name, description, requirements, category }),
				})

				const data = await response.json()

				return data
			}

			const data = await addCourse()

			navigate(`/courses/${data.id}`)
		}
	}

	return (
		<section className='create-course-organism'>
			<h2 className='create-course-organism__header'>Log in to your Udemy account</h2>
			<form noValidate onSubmit={handleSubmit}>
				<div className='create-course-organism__wrapper'>
					<div className='create-course-organism__input-wrapper'>
						<select
							className='create-course-organism__input-select'
							required
							name='category'
							value={category}
							onChange={e => setCategory(e.target.value)}>
							<option value=''>Select Category</option>
							<option value='Design'>Design</option>
							<option value='Development'>Development</option>
							<option value='Marketing'>Marketing</option>
							<option value='IT and Software'>IT and Software</option>
							<option value='Personal Development'>Personal Development</option>
							<option value='Business'>Business</option>
							<option value='Photography'>Photography</option>
							<option value='Music'>Music</option>
						</select>
						{/* <label className='create-course-organism__label' htmlFor='cateogory'>
							Courese Catagory
						</label> */}
					</div>
					{categoryError && <span className='create-course-organism__error'>error</span>}
				</div>

				<div className='create-course-organism__wrapper'>
					<div className='create-course-organism__input-wrapper'>
						<input
							type='text'
							className='create-course-organism__input'
							required
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<label className='create-course-organism__label' htmlFor='name'>
							Courese Name
						</label>
					</div>
					{nameError && <span className='create-course-organism__error'>error</span>}
				</div>
				<div className='create-course-organism__wrapper'>
					<div className='create-course-organism__input-wrapper'>
						<input
							type='text'
							className='create-course-organism__input'
							required
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
						<label className='create-course-organism__label' htmlFor='description'>
							Description
						</label>
					</div>
					{descriptionError && <span className='create-course-organism__error'>error</span>}
				</div>
				<div className='create-course-organism__wrapper'>
					<div className='create-course-organism__input-wrapper'>
						<input
							type='text'
							className='create-course-organism__input'
							required
							value={requirements}
							onChange={e => setRequirements(e.target.value)}
						/>
						<label className='create-course-organism__label' htmlFor='requirements'>
							Requirements
						</label>
					</div>
					{requirementsError && <span className='create-course-organism__error'>error</span>}
				</div>

				<ButtonAtom btnClass='button--loginPage' label='Create Course' />
			</form>
		</section>
	)
}
