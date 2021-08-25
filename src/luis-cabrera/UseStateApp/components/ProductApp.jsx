import { useState } from "react";

const initialProduct = {
	title: 		 'Product title',
	description: 'Product description',
}

const ProductApp = () => {
	const [product, setProduct] = useState(initialProduct);

	const updateProduct = (property, value) => {
		setProduct({
			...product,
			[property]: value,
		});
	}

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>ProductApp</h2>

			<button
				className="button is-primary"
				onClick={() => updateProduct('title', 'New product title')}
				>
				Update
			</button>

			<p className="is-size-5 pt-4">
				Title: {product.title}
				<br />
				Description: {product.description}
			</p>

			<pre>
				{JSON.stringify(product, null, 2)}
			</pre>
		</div>
	);
}

export default ProductApp;
