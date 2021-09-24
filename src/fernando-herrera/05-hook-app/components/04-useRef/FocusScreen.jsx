import { useRef } from 'react';

const FocusScreen = () =>
{
	const inputRef = useRef();

	const handleClick = () =>
	{
		inputRef.current.select();
	}

	return (
		<div className="min-height-full content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
			<h1 className="has-text-light">Focus Screen</h1>
			<hr className="full-rule has-background-grey-dark" />

			<div className="field">
				<div className="control">
					<input
						ref={ inputRef }
						type="text"
						placeholder="Name"
						className="input"
						/>
				</div>
			</div>

			<button
				className="button is-primary"
				onClick={ handleClick }
				>
				Focus
			</button>
		</div>
	);
};

export default FocusScreen;
