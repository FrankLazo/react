import { useReducer, useState } from "react";

const types =
{
	add: 	'add',
	update:	'update',
	delete: 'delete',
}

const initialTodos =
[
	{ id: 1, title: 'Todo #1', },
	{ id: 2, title: 'Todo #2', },
	{ id: 3, title: 'Todo #3', },
]

const reducer = (state, action) =>
{
	switch (action.type)
	{
		case types.delete:
			return state.filter(todo => todo.id !== action.payload);

		case types.add:
			return [...state, action.payload];

		case types.update:
		{
			const todoEdit = action.payload;
			return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo);
		}

		default:
			return state;
	}
}

const TodoApp = () =>
{
	const [todos, dispatch] = useReducer(reducer, initialTodos);
	const [text, setText] = useState('');

	const handleSubmit = (e) =>
	{
		e.preventDefault();

		const newTodo =
		{
			id: Date.now(),
			title: text,
		}

		dispatch({ type: types.add, payload: newTodo });
	}

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>Todo App</h2>

			<ul>
			{
				todos.map(todo => (
					<li key={ todo.id } className="is-bulletless is-flex is-align-items-center">
						{ todo.title }

						<div className="field has-addons ml-4">
							<div className="control">
								<button
									onClick={ () => dispatch({
										type: types.delete,
										payload: todo.id,
									})}
									className="button is-primary is-light"
									>
									Delete
								</button>
							</div>

							<div className="control">
								<button
									onClick={ () => dispatch({
										type: types.update,
										payload: { ...todo, title: text },
									})}
									className="button is-primary"
									>
									Update
								</button>
							</div>
						</div>
					</li>
				))
			}
			</ul>

			<form className="form"
				onSubmit={ handleSubmit }
				>
				<div className="field">
					<div className="control">
						<input
							type="text"
							value={ text }
							placeholder="Todo"
							onChange={ e => setText(e.target.value) }
							className="input"
							/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default TodoApp;
