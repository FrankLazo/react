import { Link, NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import PrivateRouter from '../components/PrivateRouter';
import CategoriesPage from '../pages/CategoriesPage';

const CategoriesRouter = () =>
{
	const { url } = useRouteMatch();

	return (
		<div>
			<nav className="tabs mt-4">
				<ul>
					<li>
						<NavLink exact to={`${url}`} activeClassName="has-text-primary has-text-weight-medium">All</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/terror`} activeClassName="has-text-primary has-text-weight-medium">Terror</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/action`} activeClassName="has-text-primary has-text-weight-medium">Action</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/anime`} activeClassName="has-text-primary has-text-weight-medium">Anime</NavLink>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route exact path="/categories" component={CategoriesPage} />

				<PrivateRouter
					path="/categories/terror"
					component={ TerrorRouter }
					/>

				<Route exact path="/categories/action">
					<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
						<h2>Action category</h2>
					</div>
				</Route>

				<Route exact path="/categories/anime">
					<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
						<h2>Anime category</h2>
					</div>
				</Route>

				<Route path="/*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</div>
	);
}

const TerrorRouter = () =>
{
	const { url } = useRouteMatch();

	return (
		<div>
			<nav className="tabs">
				<ul>
					<li>
						<Link to="/categories/terror">All</Link>
					</li>
					<li>
						<Link to="/categories/terror/gore">Gore</Link>
					</li>
					<li>
						<Link to="/categories/terror/suspense">Suspense</Link>
					</li>
				</ul> {/* Enlaces en componentes aparte */}
			</nav>

			<Switch>
				<Route exact path={`${url}`}>
					<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
						<h2>Terror category</h2>
					</div>
				</Route>

				<Route exact path={`${url}/gore`}>
					<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
						<h3>Gore</h3>
					</div>
				</Route>

				<Route exact path={`${url}/suspense`}>
					<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
						<h3>Suspense</h3>
					</div>
				</Route>

				<Route path="/*">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</div>
	);
}

export default CategoriesRouter;
