import { useState } from "react";

const ConditionalApp = () => {
	const [condition, setCondition] = useState(true);

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>ConditionalApp</h2>

			<button
				className="button is-primary is-light"
				onClick={() => setCondition(!condition)}
				>
				Toggle
			</button>

			<p className="mt-4 is-size-5">
				Message state in:&nbsp;
				<span className={ `has-text-${condition ? 'primary' : 'danger'}` }>
					{ condition.toString().toUpperCase() }
				</span>
			</p>
		</div>
	);
}

export default ConditionalApp;
