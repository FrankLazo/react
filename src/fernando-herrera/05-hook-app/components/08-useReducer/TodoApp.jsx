import { useEffect, useReducer } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import todoReducer from './todoReducer';

const init = () => (
	JSON.parse(localStorage.getItem('todos')) || []
);

const TodoApp = () =>
{
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = (todoId) =>
	{
		const action = {
			type:    'delete',
			payload: todoId,
		};

		dispatch(action);
	};

	const handleToggle = (todoId) =>
	{
		dispatch({
			type:    'toggle',
			payload: todoId,
		});
	};

	const handleAddTodo = (newTodo) =>
	{
		dispatch({
			type:    'add',
			payload: newTodo,
		});
	};

	return (
		<div className="min-height-full content has-background-dark p-6 has-text-light">
			<h1 className="has-text-light">Todo App</h1>
			<hr className="full-rule has-background-grey-dark" />

			<h2 className="has-text-primary">Add task:</h2>

			<TodoAdd
				handleAddTodo={ handleAddTodo }
				/>

			<hr className="full-rule has-background-grey-dark" />
			<h2 className="has-text-primary">
				Tasks: <span className="has-text-primary-light">{ todos.length }</span>
			</h2>

			<TodoList
				todos={ todos }
				handleToggle={ handleToggle }
				handleDelete={ handleDelete }
				/>
		</div>
	);
};

export default TodoApp;
