import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';
import 'animate.css';

const HeroList = ({ publisher }) =>
{
	const heroes = getHeroesByPublisher(publisher);

	// Optimización para no volvel a cargar la información
	// En caso la app tuviera problemas de rendimiento
	// const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);

	return (
		<div className="columns is-multiline animate__animated animate__fadeIn">
		{
			heroes.map(hero => (
				<HeroCard
					key={ hero.id }
					{ ...hero }
					/>
			))
		}
		</div>
	);
};

export default HeroList;
