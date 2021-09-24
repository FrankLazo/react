import { memo } from 'react';

const SpanPrimary = memo(({ value }) =>
{
	return (
		<span className="is-size-4 has-text-primary">{ value }</span>
	);
});

export default SpanPrimary;
