import { useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) =>
{
	const { dispatch } = useContext(AuthContext);
	const toPath = localStorage.getItem('lastPath') || '/';

	const handleLogin = () =>
	{
		// history.push('/');
		// history.replace('/');

		dispatch({
			type: types.login,
			payload: {
				user: 'Frank'
			},
		});

		history.replace(toPath);
	};

	return (
		<div className="min-height-full content has-background-light p-4">
			<h1 className="has-text-primary">Login</h1>
			<hr className="has-background-grey-lighter" />

			<button
				className="button is-primary"
				onClick={ handleLogin }
				>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
