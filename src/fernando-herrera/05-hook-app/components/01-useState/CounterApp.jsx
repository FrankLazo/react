import { useState } from 'react';
import './CounterApp.sass';

const CounterApp = () =>
{
	const [{ counter1, counter2 }, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
		counter4: 40,
	});

	return (
		<div className="counterapp content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Counter App</h1>
			<hr className="full-rule has-background-grey-dark" />

			<p>Counter 1: <span className="is-size-4 has-text-primary">{ counter1 }</span></p>
			<p>Counter 2: <span className="is-size-4 has-text-primary">{ counter2 }</span></p>

			<button
				className="button is-primary"
				onClick={() => setCounter(counter => ({
					...counter,
					counter1: counter1 + 1,
				}))}
				>
				Increment by 1
			</button>
		</div>
	);
};

export default CounterApp;
