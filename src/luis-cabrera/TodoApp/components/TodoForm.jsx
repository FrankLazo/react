import { useEffect, useState } from "react";

const initialFormValues = {
	title:       '',
	description: '',
};

const TodoForm = ({ todoEdit, setTodoEdit, todoAdd, todoUpdate }) => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const {title, description} = formValues;

	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);

	useEffect(() => {
		if (todoEdit)
		{
			setFormValues(todoEdit);
		}
		else
		{
			setFormValues(initialFormValues);
		}
	}, [todoEdit]);

	const handleInputChange = (e) => {
		const changedFormValues = {
			...formValues,
			[e.target.name]: e.target.value,
		}

		setFormValues(changedFormValues);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title.trim() === '')
		{
			setError('Debes indicar un título!');
			return;
		}

		if (description.trim() === '')
		{
			setError('Debes indicar una descripción!');
			return;
		}

		if (todoEdit)
		{
			todoUpdate(formValues);
			setSuccessMessage('Actualizado con éxito!');
		}
		else
		{
			todoAdd(formValues);
			setSuccessMessage('Agregado con éxito!');
			setFormValues(initialFormValues);
		}

		setError(null);

		setTimeout(() => {
			setSuccessMessage(null);
		}, 2000);
	}

	return (
		<section className="column">
			<header className="mb-4">
				<h2>{todoEdit ? 'Editar tarea' : 'Nueva tarea'}</h2>

				{
					todoEdit &&
					(
						<button
							className="button is-warning"
							onClick={() => setTodoEdit(null)}
							>
							Cancelar edición
						</button>
					)
				}
			</header>

			<form onSubmit={handleSubmit}>
				<div className="field">
					<div className="control">
						<input
							type="text"
							name="title"
							placeholder="Título"
							value={title}
							className="input"
							onChange={handleInputChange}
							/>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<textarea
							type="text"
							name="description"
							placeholder="Descripción"
							value={description}
							className="textarea"
							onChange={handleInputChange}
							>
						</textarea>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<button className="button is-primary is-fullwidth">
							{
								todoEdit
								? 'Actualizar tarea'
								: 'Agregar tarea'
							}
						</button>
					</div>
				</div>
			</form>

			{
				error &&
				(
					<div className="notification is-danger is-light mt-4">
						{error}
					</div>
				)
			}

			{
				successMessage &&
				(
					<div className="notification is-success is-light mt-4">
						{successMessage}
					</div>
				)
			}
		</section>
	)
}

export default TodoForm;
