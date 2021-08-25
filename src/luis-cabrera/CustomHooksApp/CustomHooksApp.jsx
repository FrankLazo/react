import CounterApp from './components/CounterApp';
import MouseApp from './components/MouseApp';
import TodoApp from './components/TodoApp';

const CustomHooksApp = () => {
	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">Custom Hooks</h1>

			<CounterApp />
			<TodoApp />
			<MouseApp />
		</div>
	);
}

export default CustomHooksApp;
