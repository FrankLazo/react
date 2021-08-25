import { useState } from 'react';
import LifeCycle from './components/LifeCycle';
import FetchCard from './components/FetchCard';
import ResizeApp from './components/ResizeApp';

const UseEffectApp = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">useEffect</h1>

			<div className="block is-flex is-flex-direction-column is-align-items-center">
				<h2>LifeCycle</h2>

				<button
					className="button is-primary"
					onClick={() => setShow(!show)}
					>
					Show/Hide
				</button>

				{
					show && <LifeCycle />
				}
			</div>

			<FetchCard />

			{
				show && <ResizeApp />
			}
		</div>
	);
}

export default UseEffectApp;
