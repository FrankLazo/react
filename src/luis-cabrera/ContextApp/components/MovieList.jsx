import { useContext } from 'react';
import MoviesContext from '../contexts/MoviesContext';
import Movie from './Movie';

const MovieList = () => {
	const { movies } = useContext(MoviesContext);

	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">Context App</h1>

			<div className="columns is-multiline">
			{
				movies.map(movie => (
					<div className="column is-one-third" key={ movie.id }>
						<Movie movie={ movie } />
					</div>
				))
			}
			</div>
		</div>
	);
}

export default MovieList;
