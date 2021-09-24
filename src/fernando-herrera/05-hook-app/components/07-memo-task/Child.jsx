import { memo } from 'react';

const Child = memo(({ number, increment }) =>
{
    console.log('Me volví a generar :(');

    return (
        <button
            className="button is-primary mr-2"
            onClick={ () => increment( number ) }
        	>
            { number }
        </button>
    );
});

export default Child;
