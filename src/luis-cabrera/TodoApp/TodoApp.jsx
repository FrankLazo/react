import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodos = [
	{
		id: 1,
		title: 'Todo #1',
		description: 'Descripción del todo #1',
		completed: true,
	},
	{
		id: 2,
		title: 'Todo #2',
		description: 'Descripción del todo #2',
		completed: true,
	},
	{
		id: 3,
		title: 'Todo #3',
		description: 'Descripción del todo #3',
		completed: false,
	},
	{
		id: 4,
		title: 'Todo #4',
		description: 'Descripción del todo #4',
		completed: false,
	},
];

const localTodos = JSON.parse(localStorage.getItem('todos'));

const TodoApp = () => {
	const [todos, setTodos] = useState(localTodos || initialTodos);
	const [todoEdit, setTodoEdit] = useState(null);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const todoDelete = (todoId) => {
		if (todoEdit && todoEdit.id === todoId)
		{
			setTodoEdit(null);
		}

		const changedTodos = todos.filter(todo => (todo.id !== todoId));
		setTodos(changedTodos);
	};

	const todoToggleCompleted = (todoId) => {
		const changedTodos = todos.map(todo => (
			todo.id === todoId
			? {...todo, completed: !todo.completed}
			: todo
		));

		setTodos(changedTodos);
	};

	const todoAdd = (todo) => {
		const newTodo = {
			id: Date.now(),
			...todo,
			completed: false,
		};

		const changedTodos = [
			...todos,
			newTodo,
		];

		setTodos(changedTodos);
	};

	const todoUpdate = (todoEdit) => {
		const changedTodos = todos.map(todo => (
			todo.id === todoEdit.id
			? todoEdit
			: todo
		));

		setTodos(changedTodos);
	}

	return (
		<div className="todoApp container content has-background-light p-4">
			<h1 className="has-text-primary">Todo app</h1>

			<div className="columns">
				<TodoList
					todos={todos}
					setTodoEdit={setTodoEdit}
					todoDelete={todoDelete}
					todoToggleCompleted={todoToggleCompleted}
					/>

				<TodoForm
					todoEdit={todoEdit}
					setTodoEdit={setTodoEdit}
					todoAdd={todoAdd}
					todoUpdate={todoUpdate}
					/>
			</div>
		</div>
	)
}

export default TodoApp;
