import { useEffect, useState } from "react";
import './DogsApp.sass'
import Card from "./components/Card";
import Error from "./components/Error";
import Select from "./components/Select";
import getDog from "./helpers/getDog";

const initialDog = {
	image: '',
	breed: {
		id:   0,
		name: '',
	},
}

const DogsApp = () => {
	const [dog, setDog] = useState(initialDog);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		updateDog();
	}, []);

	const updateDog = (breedId) => {
		setLoading(true);

		getDog(breedId)
			.then(newDog => {
				setDog(newDog);
				setLoading(false);
			})
			.catch(error => {
				console.log(error);
				setError('Error al cargar un perro.');
				setLoading(false);
			});
	}

	return (
		<div className="dogsApp container content has-background-light is-flex is-flex-direction-column is-align-items-center is-justify-content-center p-4">
			<h1 className="is-uppercase">Dogs</h1>

			<Select
				updateDog={updateDog}
				/>

			<Card
				dog={dog}
				updateDog={updateDog}
				loading={loading}
				/>

			{
				error && <Error error={error} />
			}
		</div>
	);
}

export default DogsApp;
