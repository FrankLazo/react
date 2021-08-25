import { useEffect, useState } from 'react';
import './BreakingBadApp.sass';
import Quote from './components/Quote';
import Spinner from './components/Spinner';

const initialQuote = {
	text: '',
	author: '',
};

const BreakingBadApp = () => {
	const [quote, setQuote] = useState(initialQuote);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		updateQuote();
	}, []);

	const updateQuote = async () => {
		setLoading(true);

		const url = 'https://www.breakingbadapi.com/api/quote/random';
		const res = await fetch(url);
		const [newQuote] = await res.json();
		const { quote: text, author } = newQuote;

		setQuote({
			text,
			author,
		});

		setLoading(false);
	}

	return (
		<div className="breakingBadApp container has-background-success-dark is-flex is-flex-direction-column is-align-items-center p-6">
			<div className="block brand-logo p-4">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
					alt="Breaking Bad logo"
					/>
			</div>

			<div className="block">
				<button
					className="button"
					onClick={updateQuote}
					>
					Get another
				</button>
			</div>

			{
				loading
				? <Spinner />
				: <Quote quote={quote} />
			}
		</div>
	);
}

export default BreakingBadApp;
