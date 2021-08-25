import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const Navbar = () =>
{
	const auth = useAuth();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<div
					className={`navbar-burger ${ showMenu && 'is-active' }`}
					onClick={() => setShowMenu(!showMenu)}
					>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</div>
			</div>

			<div className={`navbar-menu ${ showMenu && 'is-active' }`}>
				<ul className="navbar-start">
					<li className="navbar-item">
						<NavLink exact to="/"
						className={`${ showMenu ? 'has-text-dark' : 'has-text-light' }`}
						activeClassName="has-text-primary">Home</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink to="/about"
						className={`${ showMenu ? 'has-text-dark' : 'has-text-light' }`}
						activeClassName="has-text-primary">About</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink to="/contact"
						className={`${ showMenu ? 'has-text-dark' : 'has-text-light' }`}
						activeClassName="has-text-primary">Contact</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink to="/categories"
						className={`${ showMenu ? 'has-text-dark' : 'has-text-light' }`}
						activeClassName="has-text-primary">Categories</NavLink>
					</li>

				{
					auth.isLogged() && (
						<>
							<li className="navbar-item">
								<NavLink to="/dashboard"
								className={`${ showMenu ? 'has-text-dark' : 'has-text-light' }`}
								activeClassName="has-text-primary">Dashboard</NavLink>
							</li>
							<li className="navbar-item">
								<NavLink to="/payments"
								className={`${ showMenu ? 'has-text-dark' : 'has-text-light' }`}
								activeClassName="has-text-primary">Payments</NavLink>
							</li>
						</>
					)
				}
				</ul>

				<ul className="navbar-end">
				{
					!auth.isLogged() && (
						<>
							<li className="navbar-item">
								<NavLink to="/login"
								className={`${ showMenu ? 'has-text-dark' : 'has-text-light' }`}
								activeClassName="has-text-primary">Login</NavLink>
							</li>
							<li className="navbar-item">
								<NavLink to="/register"
								className={`${ showMenu ? 'has-text-dark' : 'has-text-light' }`}
								activeClassName="has-text-primary">Register</NavLink>
							</li>
						</>
					)
				}

				{
					auth.isLogged() && (
						<li className="navbar-item">
							<div className="buttons">
								<button className="button is-primary" onClick={auth.logout}>
									Logout
								</button>
							</div>
						</li>
					)
				}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
