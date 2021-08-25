import { useDispatch, useStore } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

const MyComponent = () =>
{
	const {user, products} = useStore();
	const dispatch = useDispatch();

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>My Component</h2>

			<h3>User: {user?.name}</h3>
			<div className="field has-addons">
				<div className="control">
					<button
						onClick={() => dispatch({type: types.authLogout})}
						className="button is-primary is-light"
						>
						Logout
					</button>
				</div>

				<div className="control">
					<button
						onClick={() => dispatch({
							type: types.authLogin,
							payload: {id: 1, name: 'Luis'},
						})}
						className="button is-primary"
						>
						Login
					</button>
				</div>
			</div>

			<h3>Products</h3>
			<ul className="ml-0">
			{
				products.map(product => (
					<li key={product.id} className="is-bulletless">
						{product.title}
					</li>
				))
			}
			</ul>

			<div className="field has-addons">
				<div className="control">
					<button
						onClick={() => dispatch({type: types.productDeleteAll})}
						className="button is-danger is-light"
						>
						Delete All
					</button>
				</div>

				<div className="control">
					<button
						onClick={() => dispatch({type: types.productChange})}
						className="button is-danger"
						>
						Change
					</button>
				</div>
			</div>
		</div>
	);
}

export default MyComponent;
