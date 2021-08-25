import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';

const Navbar = () => {
	const [isShowedMenu, setIsShowedMenu] = useState(false);
	const { user, login, logout } = useContext(UserContext);

	return (
		<nav className="navbar is-success">
			<div className="navbar-brand">
				<div
					className="navbar-burger"
					onClick={ () => setIsShowedMenu(!isShowedMenu) }>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</div>
			</div>

			<div className={`navbar-menu ${ isShowedMenu && 'is-active' }`}>
				<div className="navbar-start">
					<div className="navbar-item">
						<p className="is-size-4">{ user ? `Hola ${ user.name }!` : 'Bienvenid@' }</p>
					</div>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							{
								user
								? (
									<button
										className="button is-danger"
										onClick={ logout }
										>
										Cerrar sesión
									</button>
								)
								: (
									<button
										className="button is-danger"
										onClick={ login }
										>
										Iniciar sesión
									</button>
								)
							}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
