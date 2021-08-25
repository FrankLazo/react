import { useState } from "react";

const ErrorApp = () => {
	const [error, setError] = useState('');

	return (
		<div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>ErrorApp</h2>

			<button
				className="button is-danger is-light mb-2"
				onClick={() => setError('Error de conexión con la API')}
				>
				Error
			</button>

			<button
				className="button is-danger is-light mb-2"
				onClick={() => setError('Credenciales incorrectas')}
				>
				Another Error
			</button>

			<button
				className="button is-primary is-light mb-2"
				onClick={() => setError('')}
				>
				Success
			</button>

			{
				error &&
				(
					<div className="notification is-warning">
						{error}
					</div>
				)
			}
		</div>
	);
}

export default ErrorApp;
