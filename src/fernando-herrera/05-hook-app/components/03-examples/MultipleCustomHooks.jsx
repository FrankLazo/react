import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const MultipleCustomHooks = () =>
{
	const url = 'https://www.breakingbadapi.com/api/';
	const { state, increment } = useCounter(1);
	const { loading, data } = useFetch(`${ url }quotes/${ state }`);
	const { author, quote } = !!data && data[0];

	return (
		<div className="min-height-full content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Breaking Bad Quotes</h1>
			<hr className="full-rule has-background-grey-dark" />

		{
			loading
			?
			<div className="notification is-warning is-light">
				Loading...
			</div>
			:
			<blockquote className="has-text-dark">
				<p>{ quote }</p>
				<p className="has-text-weight-bold">{ author }</p>
			</blockquote>
		}

			<button
				className="button is-primary"
				onClick={ () => increment() }
				>
				Next quote
			</button>
		</div>
	);
};

export default MultipleCustomHooks;
