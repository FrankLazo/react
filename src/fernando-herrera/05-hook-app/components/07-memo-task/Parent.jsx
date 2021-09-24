import { useCallback, useState } from 'react';
import Child from './Child';

const Parent = () =>
{
    const numbers = [2, 4, 6, 8, 10];
    const [value, setValue] = useState(0);

    const increment = useCallback((num) => {
        setValue( val => val + num );
    }, [setValue]);

    return (
        <div className="min-height-full content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 has-text-light">
            <h1 className="has-text-light">Parent</h1>
			<hr className="full-rule has-background-grey-dark" />

			<p>Total: <span className="is-size-4 has-text-primary">{ value }</span></p>

			<div className="is-flex">
			{
				numbers.map( number => (
					<Child
						key={ number }
						number={ number }
						increment={ increment }
						/>
				))
			}
			</div>
        </div>
    );
};

export default Parent;
