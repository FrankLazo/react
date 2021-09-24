import { useEffect } from "react";

const Message = () =>
{
	useEffect(() => {
		console.log('Mounted component');

		const mouseMove = () =>
		{
			console.log('=)');
		};

		window.addEventListener('mousemove', mouseMove);

		return () => {
			console.log('Unmounted component')
			window.removeEventListener('mousemove', mouseMove);
		}
	}, [])

	return (
		<div>
			Great!
		</div>
	);
};

export default Message;
