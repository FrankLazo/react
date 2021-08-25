import { useEffect, useState } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const initialBreeds = [
	{
		id:   0,
		name: 'Dog breeds...',
	}
];

const Select = ({ updateDog }) => {
	const [breeds, setBreeds] = useState(initialBreeds);
	const [error, setError] = useState(null);

	useEffect(() => {
		updateBreeds();
	}, []);

	const updateBreeds = () => {
		getBreeds()
			.then(newBreeds => {
				setBreeds(newBreeds)
			})
			.catch(error => {
				console.log(error);
				setError('Error al cargar las razas.');
			});
	}

	return (
		<div className="block">
			<div className="select is-primary">
				<select
					onChange={(e) => updateDog(e.target.value)}
					>
					{
						breeds.map(breed => (
							<option
								key={breed.id}
								value={breed.id}
								>
								{breed.name}
							</option>
						))
					}
				</select>
			</div>

			{
				error && <Error error={error} />
			}
		</div>
	);
}

export default Select;
