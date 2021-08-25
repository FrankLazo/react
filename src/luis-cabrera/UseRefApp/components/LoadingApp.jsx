import { useState } from 'react';
import Card from './Card';

const LoadingApp = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>LoadingApp</h2>

            <button
				onClick={() => setShow(!show)}
				className="button is-primary"
				>
                Show/Hide
            </button>

            {
				show && <Card />
			}
        </div>
    );
}

export default LoadingApp;
