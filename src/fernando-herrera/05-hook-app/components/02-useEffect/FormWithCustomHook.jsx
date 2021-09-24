// import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import './SimpleForm.sass';

const FormWithCustomHook = () =>
{
	const { values: { name, mail, pass }, handleInputChange } = useForm({
		name: '',
		mail: '',
		pass: '',
	});

	const handleSubmit = (e) =>
	{
		e.preventDefault();
		console.log({ name, mail, pass });
	}

	return (
		<div className="simpleform content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Form with custom hook</h1>
			<hr className="full-rule has-background-grey-dark" />

			<form onSubmit={ handleSubmit } className="form">
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
				<div className="field">
					<div className="control">
						<input
							type="password"
							name="pass"
							className="input"
							placeholder="password"
							value={ pass }
							onChange={ handleInputChange }
							/>
					</div>
				</div>

				<button
					type="submit"
					className="button is-primary">
					Guardar
				</button>
			</form>
		</div>
	);
};

export default FormWithCustomHook;
