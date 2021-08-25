import { useState, useEffect } from 'react';

console.log('Pre-render');

const Lifecycle = () => {
    console.log('Logic render');

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log('useEffect []');

        return () => {
            console.log('cleanup useEffect []')
        }
    }, []);

    useEffect(() => {
        console.log('useEffect no dependency');

        return () => {
            console.log('cleanup useEffect no dependency');
        }
    });

    useEffect(() => {
        console.log('useEffect [counter1]');

        return () => {
            console.log('cleanup useEffect [counter1]');
        }
    }, [counter1]);

    useEffect(() => {
        console.log('useEffect [counter2]');

        return () => {
            console.log('cleanup useEffect [couter2]');
        }
    }, [counter2]);

    useEffect(() => {
        console.log('useEffect [counter1, counter2]');

        return () => {
            console.log('cleanup useEffect [counter1, couter2]');
        }
    }, [counter1, counter2]);

    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
            {
				console.log('Return render')
			}

            <p className="is-size-5 mt-4">
				Clicks C1: {counter1}
				<br />
				Clicks C2: {counter2}
			</p>

            <div className="block">
				<button
					onClick={() => setCounter1(counter1 + 1)}
					className="button is-primary is-light mr-4"
					>
					Increment C1
				</button>

				<button
					onClick={() => setCounter2(counter2 + 1)}
					className="button is-primary is-light"
					>
					Increment C2
				</button>
			</div>
        </div>
    );
}

export default Lifecycle;
