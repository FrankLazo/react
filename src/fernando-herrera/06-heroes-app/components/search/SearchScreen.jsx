import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import getHeroesByName from '../../selectors/getHeroesByName';
import { useMemo } from 'react';

const SearchScreen = ({ history }) =>
{
	const { search } = useLocation();
	const { q = '' } = queryString.parse(search);

	const { values, handleInputChange } = useForm({ searchText: q, });
	const { searchText } = values;

	const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

	const handleSubmit = (e) =>
	{
		e.preventDefault();
		history.push(`?q=${ searchText }`);
	};

	return (
		<div className="content m-4">
			<h1 className="has-text-primary">Search</h1>
			<hr className="has-background-grey-lighter" />

			<div className="columns">
				<div className="column is-one-third">
					<h2 className="is-size-4">Search form</h2>

					<form className="form" onSubmit={ handleSubmit }>
						<div className="field">
							<div className="control">
								<input
									type="text"
									name="searchText"
									value={ searchText }
									className="input"
									placeholder="Find your hero"
									onChange={ handleInputChange }
									/>
							</div>
						</div>

						<div className="field">
							<div className="control">
								<button
									type="submit"
									className="button is-primary is-outlined is-flex full-width"
									>
									Search
								</button>
							</div>
						</div>
					</form>
				</div>

				<div className="column">
					<h2 className="is-size-4">Results</h2>

					{
						(q === '') && (
							<div className="notification is-warning is-light">Search a hero...</div>
						)
					}

					{
						(q !== '' && filteredHeroes.length === 0) && (
							<div className="notification is-danger is-light">
								There is no a hero with "{ q }"
							</div>
						)
					}

					<div className="columns is-multiline">
					{
						filteredHeroes.map(hero => (
							<HeroCard key={ hero.id } { ...hero } />
						))
					}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
