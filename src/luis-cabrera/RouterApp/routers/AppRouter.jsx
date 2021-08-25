import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';

import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PaymentsPage from '../pages/PaymentsPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';

import PublicRouter from '../components/PublicRouter';
import PrivateRouter from '../components/PrivateRouter';
import CategoriesRouter from './CategoriesRouter';

const AppRouter = () => {
	return (
		<Router>
			<Navbar />

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/contact" component={ContactPage} />

				<Route exact path="/profile/:username" component={ProfilePage} />
				<Route path="/categories" component={CategoriesRouter} />

				<PublicRouter exact path="/login" component={LoginPage} />
				<PublicRouter exact path="/register" component={RegisterPage} />

				<PrivateRouter exact path="/dashboard" component={DashboardPage} />
				<PrivateRouter exact path="/payments" component={PaymentsPage} />

				<Route path="/404" component={NotFoundPage} />
				<Route path="/*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</Router>
	);
}

export default AppRouter;
