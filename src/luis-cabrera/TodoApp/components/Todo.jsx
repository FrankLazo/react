
const Todo = ({ todo, todoDelete, todoToggleCompleted, setTodoEdit }) => {
	return (
		<section className="card mb-4">
			<header className="card-header is-align-items-center">
				<h3 className="card-header-title mb-0">
					{todo.title}
				</h3>

				<button
					className={`card-header-icon button is-success ${todo.completed || 'is-light'} mr-1`}
					onClick={() => todoToggleCompleted(todo.id)}
					>
					{
						todo.completed
						? 'Terminado'
						: 'Terminar'
					}
				</button>
			</header>

			<div className="card-content">
				<p>{todo.description}</p>
			</div>

			<footer className="card-footer is-justify-content-flex-end p-1">
				<button
					className="card-footer-item is-flex-grow-0 button is-primary mr-1"
					onClick={() => setTodoEdit(todo)}
					>
					Editar
				</button>
				<button
					className="card-footer-item is-flex-grow-0 button is-light"
					onClick={() => todoDelete(todo.id)}
					>
					Eliminar
				</button>
			</footer>
		</section>
	)
}

export default Todo;
