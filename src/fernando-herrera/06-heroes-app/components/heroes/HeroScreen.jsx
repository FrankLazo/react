import { Redirect, useParams } from 'react-router';
import getHeroById from '../../selectors/getHeroById';
import 'animate.css';

const HeroeScreen = ({ history }) =>
{
	const { heroId } = useParams();
	const hero = getHeroById(heroId);

	// Optimización para no volvel a cargar la información
	// En caso la app tuviera problemas de rendimiento
	// const hero = useMemo(() => getHeroById(heroId), [ heroId ]);

	if (!hero)
	{
		return <Redirect to="/" />;
	}

	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
	} = hero;

	const characterList = characters.split(',');


	const handleReturn = () =>
	{
		if (history.length <= 2)
		{
			history.push('/');
		}
		else
		{
			history.goBack();
		}
	}

	return (
		<div className="container content">
			<div className=" columns m-4">
				<div className="column is-one-third">
					<img
						src={ `../assets/heroes/${ heroId }.jpg` }
						alt={ superhero }
						className="animate__animated animate__fadeInLeft"
						/>
				</div>

				<div className="column is-two-third animate__animated animate__fadeIn">
					<h1 className="has-text-primary">{ superhero }</h1>
					<hr className="has-background-grey-lighter" />

					<ul>
						<li className="has-not-bullet">
							<span className="has-text-weight-bold">Alter ego: </span>{ alter_ego }</li>
						<li className="has-not-bullet">
							<span className="has-text-weight-bold">Publisher: </span>{ publisher }</li>
						<li className="has-not-bullet">
							<span className="has-text-weight-bold">First appearance: </span>{ first_appearance }</li>
					</ul>
					<hr className="has-background-grey-lighter" />

					<h2 className="is-size-4">Characters</h2>

					<ul>
					{
						characterList.map(char => (
							<li
								key={ `${ heroId } ${ char }` }
								className="has-not-bullet"
								>
								{ char }
							</li>
						))
					}
					</ul>
					<hr className="has-background-grey-lighter" />

					<button
						onClick={ handleReturn }
						className="button is-primary is-outlined"
						>
						Return
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroeScreen;
