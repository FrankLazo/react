import { useReducer } from 'react';
import productReducer, { initialProductState } from '../reducers/productReducer';
import types from '../types';

const ProductApp = () =>
{
	const [productState, dispatch] = useReducer(productReducer, initialProductState);
	const { products, cart, activeProduct } = productState;

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center mt-6">
		<h2>Product App</h2>
		<h3 className="has-text-danger">Products</h3>
		<ul>
		{
			products.map(product => (
				<li key={ product.id } className="is-bulletless is-flex is-align-items-center">
					{ product.title }

					<div className="field has-addons ml-4">
						<div className="control">
							<button
								onClick={() => dispatch({
									type: types.productShow,
									payload: product
								})}
								className="button is-primary"
								>
								Show
							</button>
						</div>

						<div className="control">
							<button
								onClick={() => dispatch({
									type: types.productAddToCart,
									payload: product
								})}
								className="button is-warning"
								>
								Add to cart
							</button>
						</div>
					</div>
				</li>
			))
		}
		</ul>

		<h3 className="has-text-danger">Cart</h3>
		<ul>
		{
			cart.map(product => (
				<li key={ product.id } className="is-bulletless is-flex is-align-items-center">
					{ product.title } - quantity: { product.quantity }

					<div className="field has-addons ml-4">
						<div className="control">
							<button
								onClick={() => dispatch({
									type: types.productRemoveOneFromCart,
									payload: product.id
								})}
								className="button is-danger"
								>
								Remove one
							</button>
						</div>

						<div className="control">
							<button
								onClick={() => dispatch({
									type: types.productRemoveFromCart,
									payload: product.id
								})}
								className="button is-danger is-light"
								>
								Remove all
							</button>
						</div>
					</div>
				</li>
			))
		}
		</ul>

		<h3 className="has-text-danger">Preview</h3>
		<p className="has-background-dark is-size-3 has-text-success is-uppercase p-4">{ activeProduct.title }</p>
		</div>
	);
}

export default ProductApp;
