import { useState } from "react";

const initialCart = [
	{
		id: 		 1,
		title: 		 'Title #1',
		description: 'Description #1',
	},
	{
		id: 		 2,
		title: 		 'Title #2',
		description: 'Description #2',
	},
	{
		id: 		 3,
		title: 		 'Title #3',
		description: 'Description #3',
	},
]

const ShoppingCart = () => {
	const [cart, setCart] = useState(initialCart);

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>ShoppingCart</h2>

			<pre>
				{ JSON.stringify(cart, null, 2) }
			</pre>
		</div>
	);
}

export default ShoppingCart;
