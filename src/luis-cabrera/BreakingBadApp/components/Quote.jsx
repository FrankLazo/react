
const Quote = ({ quote }) => {
	return (
		<div className="block">
			<p className="has-text-light has-text-centered is-size-3 is-size-4-mobile">
				{`"${quote.text}"`}
			</p>
			<p className="has-text-warning has-text-centered is-size-5">
				{`- ${quote.author} -`}
			</p>
		</div>
	);
}

export default Quote;
