import { useContext, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';

const Navbar = () =>
{
	const history = useHistory();
	const [burger, setBurger] = useState(false);
	const { user: { user }, dispatch } = useContext(AuthContext);

	const handleBurger = () =>
	{
		setBurger(!burger);
	};

	const handleLogout = () =>
	{
		dispatch({
			type: types.logout,
		});

		history.replace('./login');
	};

    return (
        <nav className="navbar">
            <div className="navbar-brand">
				<Link to="/" className="navbar-item has-text-weight-bold">Asociaciones</Link>

				<button className={`navbar-burger ${ burger && 'is-active' }`} onClick={ handleBurger }>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
			</div>

            <div className={`navbar-menu ${ burger && 'is-active' }`}>
				<ul className="navbar-start">
					<li className="navbar-item">
						<NavLink exact activeClassName="has-text-primary" to="/marvel">Marvel</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink exact activeClassName="has-text-primary" to="/dc">DC</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink exact activeClassName="has-text-primary" to="/search">Search</NavLink>
					</li>
				</ul>

				<ul className="navbar-end">
                    <li className="navbar-item">
						<span className="has-text-weight-medium">Hello { user }!</span>
					</li>
                    <li className="navbar-item">
						<div className="buttons">
							<button
								className="button is-primary"
								onClick={ handleLogout }
								>
								Logout
							</button>
						</div>
					</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
