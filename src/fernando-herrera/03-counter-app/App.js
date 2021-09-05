import PropTypes from 'prop-types';

const App = ({ welcome, description }) => {
	return (
		<>
			<h1>{ welcome }</h1>
			<p>{ description }</p>
		</>
	);
}

App.propTypes = {
  	description: PropTypes.string.isRequired,
}

App.defaultProps = {
  	description: 'My first application',
}

export default App;
