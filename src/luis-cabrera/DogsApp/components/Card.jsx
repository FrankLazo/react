import './Card.sass'
import Spinner from "./Spinner";

const Card = ({ dog, updateDog, loading }) => {
	if (loading)
	{
		return (
			<Spinner />
		);
	}

	return (
		<div className="block">
			<div
				className="card"
				onClick={() => updateDog(dog.breed.id)}
				>
				<div className="card-image">
					<img
						src={dog.image}
						alt={dog.breed.name}
						className="card-image-modifier"
						/>
				</div>

				<div className="card-content has-text-centered">
					{dog.breed.name}
				</div>
			</div>
		</div>
	);
}

export default Card;
