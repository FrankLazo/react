import { memo } from 'react';

const ShowIncrement = memo(({ increment }) =>
{
	return (
		<button
			className="button is-primary"
			onClick={ () => increment() }
			>
			Increment by 1
		</button>
	);
});

export default ShowIncrement;
