import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const PublicRouter = ({ component: Component, ...rest }) =>
{
	const auth = useAuth();

	return (
		<Route {...rest}>
		{
			!auth.isLogged()
			? <Component />
			: <Redirect to='/dashboard' />
		}
		</Route>
	);
}

export default PublicRouter;
