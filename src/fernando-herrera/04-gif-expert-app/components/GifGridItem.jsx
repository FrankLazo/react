import PropTypes from 'prop-types';
import 'animate.css';

const GifGridItem = ({ title, url }) =>
{
	return (
		<div className="card mb-4 mr-4 animate__animated animate__fadeIn">
			<div className="card-image">
				<figure className="image m-0">
					<img src={ url } alt={ title } />
				</figure>
			</div>

			<div className="card-content">
				<div className="content">
					<p >{ title }</p>
				</div>
			</div>
		</div>
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url:   PropTypes.string.isRequired,
}

export default GifGridItem;
