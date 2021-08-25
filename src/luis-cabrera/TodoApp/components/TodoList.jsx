import Todo from "./Todo";

const TodoList = ({ todos, setTodoEdit, todoDelete, todoToggleCompleted }) => {
	return (
		<section className="column is-8">
			<h2>Todo List</h2>

			{
				todos.length === 0
				? (
					<div>
						<p>No hay tareas, por favor agregar una!</p>
					</div>
				)
				: (
					todos.map(todo => (
						<Todo
							key={todo.id}
							todo={todo}
							todoDelete={todoDelete}
							todoToggleCompleted={todoToggleCompleted}
							setTodoEdit={setTodoEdit}
							/>
					))
				)
			}
		</section>
	)
}

export default TodoList;
