import { memo } from 'react';

const Item = memo(({ user, handleDelete }) => {
	return (
		<tr>
			<td>{ user.name }</td>

			<td style={{textAlign: 'right',}}>
				<button
					onClick={ () => {handleDelete(user.id)} }
					className="button is-primary"
					>
					Delete
				</button>
			</td>
		</tr>
	);
})

export default Item;
