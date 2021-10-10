import HeroList from '../heroes/HeroList';

const MarvelScreen = () =>
{
	return (
		<div className="content p-4">
			<h1 className="has-text-primary">Marvel Screen</h1>
			<hr className="has-background-grey-lighter" />

			<HeroList publisher="Marvel Comics" />
		</div>
	);
};

export default MarvelScreen;
