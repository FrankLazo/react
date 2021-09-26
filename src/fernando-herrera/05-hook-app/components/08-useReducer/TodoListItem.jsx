const TodoListItem = ({ todo, index, handleToggle, handleDelete }) =>
{
	return (
		<li className="columns has-not-bullet m-0">
			<div
				className={`column is-three-fifths has-cursor-pointer ${ todo.done && 'has-text-grey-dark' }`}
				onClick={ () => handleToggle(todo.id) }
				>
				{ index + 1 }. { todo.description }
			</div>

			<div className="column">
				<button
					className={`button ${ todo.done ? 'is-black' : 'is-danger'} mr-2`}
					>Edit</button>
				<button className={`button ${ todo.done ? 'is-black' : 'is-danger'} is-outlined`}
					onClick={ () => handleDelete(todo.id) }
					>Delete</button>
			</div>
		</li>
	);
};

export default TodoListItem;
