import { useEffect, useState } from 'react';
import Message from './Message';
import './SimpleForm.sass';

const SimpleForm = () =>
{
	const [formState, setFormState] = useState({
		name: '',
		mail: '',
	});

	const { name, mail } = formState;

	useEffect(() => {
		console.log('Loaded component');
	}, []);

	useEffect(() => {
		console.log('Form changed');
	}, [formState]);

	useEffect(() => {
		console.log('Email changed');
	}, [mail]);

	const handleInputChange = ({ target }) =>
	{
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	}

	return (
		<div className="simpleform content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Simple Form</h1>
			<hr className="full-rule has-background-grey-dark" />

			<div className="field">
				<div className="control">
					<input
						type="text"
						name="name"
						className="input"
						placeholder="Name"
						autoComplete="off"
						value={ name }
						onChange={ handleInputChange }
						/>
				</div>
			</div>

			<div className="field">
				<div className="control">
					<input
						type="text"
						name="mail"
						className="input"
						placeholder="mail@example.com"
						autoComplete="off"
						value={ mail }
						onChange={ handleInputChange }
						/>
				</div>
			</div>

		{
			(name === '123') && <Message />
		}
		</div>
	);
};

export default SimpleForm;
