import { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () =>
{
	const [show, setShow] = useState(false);

	return (
		<div className="min-height-full content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h2 className="has-text-primary">Real Example Ref</h2>
			<hr className="full-rule has-background-primary" />

			<button
				className="button is-primary"
				onClick={ () => setShow(!show) }
				>
				Show / Hide
			</button>

		{
			show && <MultipleCustomHooks />
		}
		</div>
	);
};

export default RealExampleRef;
