import { Link, NavLink } from 'react-router-dom';

const NavBar = () =>
{
	return (
		<nav className="navbar">
			<div className="navbar-brand">
				<Link to="/" className="navbar-item has-text-weight-bold">useContext</Link>
			</div>

			<div className="navbar-menu is-active">
				<ul className="navbar-start">
					<li className="navbar-item">
						<NavLink exact activeClassName="has-text-primary" to="/">Home</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink exact activeClassName="has-text-primary" to="/About">About</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink exact activeClassName="has-text-primary" to="/Login">Login</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
