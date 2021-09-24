import { useMemo, useState } from 'react';
import largeProcess from '../../helpers/largeProcess';
import useCounter from '../../hooks/useCounter';

const MemoHook = () =>
{
	const { state: counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);

	const memoLargeProcess = useMemo(() => largeProcess(counter), [counter]);

	return (
		<div className="min-height-full content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Memo Hook</h1>
			<hr className="full-rule has-background-grey-dark" />

			<p>Counter: <span className="is-size-4 has-text-primary">{ counter }</span></p>

			<p>{ memoLargeProcess }</p>

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

export default MemoHook;
