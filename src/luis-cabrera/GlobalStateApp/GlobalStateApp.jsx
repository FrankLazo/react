import MyComponent from './components/MyComponent';
import StoreProvider from './store/StoreProvider';

const GlobalStateApp = () =>
{
	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">Simple Global State</h1>

			<StoreProvider>
				<MyComponent />
			</StoreProvider>
		</div>
	);
}

export default GlobalStateApp;
