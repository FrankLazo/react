import HeroList from '../heroes/HeroList';

const DcScreen = () =>
{
	return (
		<div className="content p-4">
			<h1 className="has-text-primary">DC Screen</h1>
			<hr className="has-background-grey-lighter" />

			<HeroList publisher="DC Comics" />
		</div>
	);
};

export default DcScreen;
