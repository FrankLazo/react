import { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';
import './GifExpertApp.sass';
import 'animate.css';

const GifExpertApp = ({ defaultCategories=[] }) =>
{
	const [categories, setCategories] = useState(defaultCategories);
	// const [categories, setCategories] = useState(['Megadeth']);

	return (
		<div className="gifexpertapp content has-background-dark is-flex is-flex-direction-column is-align-items-start p-6 animate__animated animate__fadeIn">
			<h1 className="has-text-primary">Gif expert app</h1>

			<CategoryAdd setCategories={ setCategories } />

			<hr className="full-rule has-background-grey-dark"/>

		{
			categories.map(category => {
				return (
					<GifGrid
						key={ category }
						category={ category }
						/>
				)
			})
		}
		</div>
	);
};

export default GifExpertApp;
