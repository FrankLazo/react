import CounterApp from './components/CounterApp';
import ProductApp from './components/ProductApp';
import TodoApp from './components/TodoApp';

const UseReducerApp = () => {
	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">useReducer</h1>

			<CounterApp />
			<TodoApp />
			<ProductApp />
		</div>
	);
}

export default UseReducerApp;
