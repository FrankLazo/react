import { useLayoutEffect, useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const Layout = () =>
{
	const url = 'https://www.breakingbadapi.com/api/';
	const { state, increment } = useCounter(1);
	const { data } = useFetch(`${ url }quotes/${ state }`);
	const { quote } = !!data && data[0];

	const paragraph = useRef();

	useLayoutEffect(() => {
		console.log(paragraph.current.getBoundingClientRect());
	}, [quote])

	return (
		<div className="min-height-full content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Layout Effect</h1>
			<hr className="full-rule has-background-grey-dark" />

			<blockquote
				className="has-text-dark"
				ref={ paragraph }
				>
				<p>{ quote }</p>
			</blockquote>

			<button
				className="button is-primary"
				onClick={ () => increment() }
				>
				Next quote
			</button>
		</div>
	);
};

export default Layout;
