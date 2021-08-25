import useCounter from '../hooks/useCounter';

const CounterApp = () => {
	const [counter, increment, reset] = useCounter(0);

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>Counter App</h2>

			<p>Clicks: <span className="is-size-4 has-text-primary">{ counter }</span></p>

			<div className="field has-addons">
				<div className="control">
					<button
						className="button is-primary"
						onClick={ increment }>
						Increment
					</button>
				</div>

				<div className="control">
					<button
						className="button is-primary is-light"
						onClick={ reset }>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default CounterApp;
