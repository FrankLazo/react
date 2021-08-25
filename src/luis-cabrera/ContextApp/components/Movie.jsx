import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Movie = ({ movie }) => {
	const imgStyles = {
		height: '260px',
		objectFit: 'cover',
		objectPosition: 'top',
	}

	const { user, toggleFavoriteMovieToUser } = useContext(UserContext);
	const isFavorite = user?.favoriteMovies?.includes(movie.id);

	return (
		<div className="card">
			<div className="card-image">
				<figure className="image mb-0">
					<img
						src={ movie.imageUrl }
						alt={ movie.title }
						style={ imgStyles }
						/>
				</figure>
			</div>

			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-size-5">{ movie.title }</p>
					</div>

					<div className="media-right">
					{
						user?.id &&
							<button
								className={ `button ${isFavorite ? 'is-primary' : 'is-primary is-light'}` }
								onClick={ () => toggleFavoriteMovieToUser(movie.id) }
								>
								Favorito
							</button>
					}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Movie;
