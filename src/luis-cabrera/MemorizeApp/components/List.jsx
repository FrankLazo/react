import { memo } from 'react';
import Item from './Item';

const List = memo(({ users, handleDelete }) => {
	return (
		<table className="table is-striped is-hoverable" style={{width: '300px',}}>
			<tbody>
			{
				users.map(user => (
					<Item
						key={ user.id }
						user={ user }
						handleDelete={ handleDelete }
						/>
				))
			}
			</tbody>
		</table>
	)
})

export default List;
