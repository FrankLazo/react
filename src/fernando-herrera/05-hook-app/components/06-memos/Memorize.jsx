import { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import SpanPrimary from './SpanPrimary';

const Memorize = () =>
{
	const { state: counter, increment } = useCounter(0);
	const [show, setShow] = useState(true);

	return (
		<div className="min-height-full content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Memorize</h1>
			<hr className="full-rule has-background-grey-dark" />

			<p>Counter: <SpanPrimary value={ counter } /></p>

			<div className="field has-addons">
				<div className="control">
					<button
						className="button is-primary"
						onClick={ () => increment() }
						>
						Increment by 1
					</button>
				</div>

				<div className="control">
					<button
						className="button is-warning"
						onClick={ () => setShow(!show) }
						>
						Show/Hide { JSON.stringify(show) }
					</button>
				</div>
			</div>
		</div>
	);
};

export default Memorize;
