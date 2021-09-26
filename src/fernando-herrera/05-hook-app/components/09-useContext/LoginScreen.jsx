import { useContext } from 'react';
import UserContext from './UserContext';

const LoginScreen = () =>
{
	const { setUser } = useContext(UserContext);

	return (
		<div className="min-height-full content has-background-dark p-6 has-text-light">
			<h1 className="has-text-light">Login</h1>
			<hr className="full-rule has-background-grey-dark" />

			<button
				className="button is-primary"
				onClick={ () => setUser({ id: 123, name: 'Frank' }) }
				>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
