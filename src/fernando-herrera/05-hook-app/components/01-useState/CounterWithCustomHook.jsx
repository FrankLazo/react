import useCounter from '../../hooks/useCounter';
import './CounterApp.sass';

const CounterWithCustomHook = () =>
{
	const { state: counter, increment, decrement, reset } = useCounter( 50 );

	return (
		<div className="counterapp content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Counter with Hook</h1>
			<hr className="full-rule has-background-grey-dark" />

			<p>Counter: <span className="is-size-4 has-text-primary">{ counter }</span></p>

			<div className="field has-addons">
				<div className="control">
					<button
						className="button is-link"
						onClick={ () => increment(2) }
						>
						Increment by 2
					</button>
				</div>

				<div className="control">
					<button
						className="button is-primary"
						onClick={ reset }
						>
						Reset
					</button>
				</div>

				<div className="control">
					<button
						className="button is-warning"
						onClick={ () => decrement(2) }
						>
						Decrement by 2
					</button>
				</div>
			</div>
		</div>
	);
};

export default CounterWithCustomHook;
