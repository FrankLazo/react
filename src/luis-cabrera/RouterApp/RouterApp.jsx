import AuthProvider from './auth/AuthProvider';
import AppRouter from './routers/AppRouter';

const RouterApp = () =>
{
	return (
		<div>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</div>
	);
}

export default RouterApp;
