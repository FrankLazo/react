import { useLocation, useHistory } from 'react-router-dom';

const CategoriesPage = () =>
{
	const location = useLocation();
	const history = useHistory();

	const query = new URLSearchParams(location.search);
	const skip = parseInt(query.get('skip')) || 0;
	const limit = parseInt(query.get('limit')) || 10;

	const handleNext = () => {
		query.set('skip', skip + limit);

		history.push({
			search: query.toString(),
		});
	}

	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">Categories</h1>
			<p>skip: <span className="has-text-primary is-size-4">{skip}</span></p>
			<p>limit: <span className="has-text-primary is-size-4">{limit}</span></p>

			<button
				onClick={handleNext}
				className="button is-primary">
				Next
			</button>
		</div>
	);
}

export default CategoriesPage;
