import useForm from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) =>
{
	const { values: { description }, handleInputChange, reset } = useForm({ description: '' });

	const handleSubmit = (e) =>
	{
		e.preventDefault();

		if (description.trim().length <= 1)
		{
			return;
		}

		const newTodo = {
			id:          new Date().getTime(),
			description: description,
			done:        false,
		};

		handleAddTodo(newTodo);
		reset();
	};

	return (
		<form onSubmit={ handleSubmit } className="form">
			<div className="field">
				<div className="control">
					<input
						type="text"
						name="description"
						placeholder="Learn..."
						autoComplete="off"
						value={ description }
						onChange={ handleInputChange }
						className="input"
						/>
				</div>
			</div>

			<div className="field">
				<div className="control">
					<button
						type="submit"
						className="button is-primary"
						>
						Add task
					</button>
				</div>
			</div>
		</form>
	);
};

export default TodoAdd;
