import { Link } from 'react-router-dom';
// import { heroImages } from '../../helpers/heroImages';

const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
}) =>
{
	return (
		<div className="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
			<div className="card">
				<div className="card-image">
					<img
						src={ `./assets/heroes/${ id }.jpg` }
						// src={ heroImages(`./${ id }.jpg`).default }
						alt={ superhero }
						/>
				</div>

				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<p className="title is-4">{ superhero }</p>
							<p className="subtitle is-6">{ alter_ego }</p>
						</div>
					</div>

					<div className="content">
					{
						(alter_ego !== characters)
							&& <p>{ characters }</p>
					}

						<p className="has-text-grey-light">{ first_appearance }</p>
					</div>
				</div>

				<footer className="card-footer">
					<Link to={ `./hero/${ id }` } className="card-footer-item">Ver más...</Link>
				</footer>
			</div>
		</div>
	);
};

export default HeroCard;
