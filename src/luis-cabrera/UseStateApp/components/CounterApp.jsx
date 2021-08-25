import { useState } from "react";

const CounterApp = () => {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter(counter + 1);
		setCounter(prevCounter => prevCounter + 1);
	}

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>CounterApp</h2>

			<button
				className="button is-primary is-light"
				onClick={incrementCounter}
				>
				Increment
			</button>

			<p className="is-size-1">
				{counter}
			</p>
		</div>
	);
}

export default CounterApp;
