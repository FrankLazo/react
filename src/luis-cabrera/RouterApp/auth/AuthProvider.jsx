import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) =>
{
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	useEffect(() =>
	{
		try
		{
			localStorage.setItem('user', JSON.stringify(user));
		}
		catch (error) // Por si hay errores en el localStorage
		{
			localStorage.removeItem('user');
			console.log(error);
		}
	}, [user]);

	const contextValue = {
		user,
		login() {
			setUser({ id: 1, username: 'luis50', })
		},
		logout() {
			setUser(null);
		},
		isLogged() {
			return !!user; // devuelve booleano
		},
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext };
export default AuthProvider;
