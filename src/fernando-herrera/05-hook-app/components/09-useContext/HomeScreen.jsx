import { useContext } from 'react';
import UserContext from './UserContext';

const HomeScreen = () =>
{
	const { user } = useContext(UserContext);

	return (
		<div className="min-height-full content has-background-dark p-6 has-text-light">
			<h1 className="has-text-light">Home</h1>
			<hr className="full-rule has-background-grey-dark" />

			<pre>
			{
				JSON.stringify(user, null, 2)
			}
			</pre>
		</div>
	);
};

export default HomeScreen;
