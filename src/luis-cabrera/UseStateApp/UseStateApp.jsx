import ConditionalApp from "./components/ConditionalApp";
import CounterApp from "./components/CounterApp";
import ErrorApp from "./components/ErrorApp";
import ProductApp from "./components/ProductApp";
import ShoppingCart from "./components/ShoppingCart";

const UseStateApp = () => {
	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">useState</h1>

			<CounterApp />
			<ConditionalApp />
			<ErrorApp />
			<ProductApp />
			<ShoppingCart />
		</div>
	);
}

export default UseStateApp;
