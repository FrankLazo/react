import useTodos from '../hooks/useTodos';

const initialTodos = [
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Learn Node.js' },
];

const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodos(initialTodos);

  return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>Todo App</h2>

			<button
				className="button is-primary"
				onClick={ () => addTodo({ title: 'New To-Do' }) }>
				Add
			</button>

			<ul>
			{
				todos.map(todo => (
					<li
						key={ todo.id }
						className="is-flex is-align-items-center">
						{ todo.title }
						<button
							className="button is-primary is-outlined ml-4"
							onClick={ () => deleteTodo(todo.id) }>
							Delete
						</button>
					</li>
				))
			}
			</ul>
		</div>
	);
}

export default TodoApp;
