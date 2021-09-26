import { useContext } from 'react';
import UserContext from './UserContext';

const AboutScreen = () =>
{
	const { user, setUser } = useContext(UserContext);

	const handleClick = () =>
	{
		setUser({});
	}

	return (
		<div className="min-height-full content has-background-dark p-6 has-text-light">
			<h1 className="has-text-light">About</h1>
			<hr className="full-rule has-background-grey-dark" />

			<pre>
			{
				JSON.stringify(user, null, 2)
			}
			</pre>

			<button
				className="button is-primary"
				onClick={ handleClick }
				>
				Logout
			</button>
		</div>
	);
};

export default AboutScreen;
