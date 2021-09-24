import { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () =>
{
	const [counter, setCounter] = useState(10);

	// const increment = () =>
	// {
	// 	setCounter(counter + 1);
	// };

	const increment = useCallback(() => {
		setCounter(c => c + 1);
	}, [setCounter]);

	return (
		<div className="min-height-full content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Callback Hook</h1>
			<hr className="full-rule has-background-grey-dark" />

			<p>Counter: <span className="is-size-4 has-text-primary">{ counter }</span></p>

			<ShowIncrement increment={ increment } />
		</div>
	);
};

export default CallbackHook;
