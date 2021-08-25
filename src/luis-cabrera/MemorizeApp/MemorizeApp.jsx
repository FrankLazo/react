import React, { useState, useEffect, useMemo, useCallback } from 'react';
import List from './components/List';

const initialUsers = [
	{
		id: 1,
		name: 'Luis',
	},
	{
		id: 2,
		name: 'María',
	},
];

function MemorizeApp() {
	const [users, setUsers] = useState(initialUsers);
	const [text, setText] = useState('');
	const [search, setSearch] = useState('');

	const handleAdd = () => {
		const newUser = {id: Date.now(), name: text}
		setUsers([...users, newUser]);
	}

	const handleSearch = () => {
		setSearch(text);
	}

	const handleDelete = useCallback((userId) => {
		setUsers(users.filter(user => user.id !== userId))
	}, [users]);

	const filteredUsers = useMemo(() =>
		users.filter(user => {
			return user.name.toLowerCase().includes(search.toLowerCase());
		}), [search, users]);

	const printUsers = useCallback(() => {
		console.log('Changed users', users);
	}, [users]);

	useEffect(() => {
		printUsers();
	}, [users, printUsers]);

	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">Memorize App</h1>

			<div className="field has-addons">
				<div className="control">
					<input
						type="text"
						value={ text }
						onChange={ (e) => setText(e.target.value) }
						className="input"
						/>
				</div>

				<div className="control">
					<button
						onClick={ handleSearch }
						className="button is-primary"
						>
						Search
					</button>
				</div>

				<div className="control">
					<button
						onClick={ handleAdd }
						className="button is-primary is-light"
						>
						Add
					</button>
				</div>
			</div>

			<List
				users={ filteredUsers }
				handleDelete={ handleDelete }
				/>
		</div>
	);
}

export default MemorizeApp;
