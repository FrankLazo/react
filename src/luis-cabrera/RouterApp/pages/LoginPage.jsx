import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const LoginPage = () =>
{
	const auth = useAuth();
	const history = useHistory();
	const location = useLocation();
	const previousObjectURL = location.state?.from;

	const handleLogin = () =>
	{
		auth.login();
		history.push(previousObjectURL || '/dashboard'); // for undefined
	}

	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">Login</h1>

			<button
				onClick={handleLogin}
				className="button"
				>
				Sign In
			</button>
		</div>
	);
}

export default LoginPage;
