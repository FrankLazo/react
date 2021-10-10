import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) =>
{
	return (
		<div>
			<Route
				{ ...rest }
				component={(props) => (
					(!isAuthenticated)
					? (<Component { ...props } />)
					: (<Redirect to="/" />)
				)}
			/>
		</div>
	);
};

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};

export default PublicRoute;
