import useBackground from '../hooks/useBackground';

const MouseApp = () => {
	const { background, position } = useBackground();

	return (
		<div
			style={{ background, height: '50vh' }}
			className="block is-flex is-flex-direction-column is-align-items-center">
			<pre>
				{ JSON.stringify(position, null, 2) }
			</pre>
		</div>
	);
}

export default MouseApp;
