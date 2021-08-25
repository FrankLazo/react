import { useReducer } from 'react';

const types =
{
	increment:	'increment',
	decrement: 	'decrement',
	reset: 		'reset',
}

const initialState = 10.25;

const init = (value) =>
{
  	return parseInt(value);
}

const reducer = (state, action) =>
{
	switch (action.type)
	{
		case types.increment:
			return state + 1;

		case types.decrement:
			return state - 1;

		case types.reset:
			return init(initialState);

		default:
			return state; // Valor por defecto, si la action no existe
	}
}

const CounterApp = () =>
{
	const [counter, dispatch] = useReducer(reducer, initialState, init);

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>Counter App</h2>

			<p>Clicks: <span className="is-size-4 has-text-primary">{ counter }</span></p>

			<div className="field has-addons">
				<div className="control">
					<button
						className="button is-primary"
						onClick={ () => dispatch({ type: types.increment }) }
						>
						Increment
					</button>
				</div>

				<div className="control">
					<button
						className="button is-warning"
						onClick={ () => dispatch({ type: types.decrement }) }
						>
						Decrement
					</button>
				</div>

				<div className="control">
					<button
						className="button is-primary is-light"
						onClick={ () => dispatch({ type: types.reset }) }
						>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default CounterApp;
