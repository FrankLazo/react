import { Switch, Route, Redirect } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroeScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/ui/Navbar';

const DashboardRoutes = () =>
{
	return (
		<>
			<Navbar />

			<div>
				<Switch>
					<Route exact path="/dc" component={ DcScreen } />
					<Route exact path="/marvel" component={ MarvelScreen } />
					<Route exact path="/hero/:heroId" component={ HeroeScreen } />
					<Route exact path="/search" component={ SearchScreen } />

					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	);
};

export default DashboardRoutes;
