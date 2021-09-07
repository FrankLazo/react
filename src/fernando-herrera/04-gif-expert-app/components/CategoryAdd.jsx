import { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({ setCategories }) =>
{
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = ({ target }) =>
	{
		setInputValue(target.value);
	};

	const handleSubmit = (e) =>
	{
		e.preventDefault();

		if (inputValue.length > 0)
		{
			setCategories(cats => [inputValue, ...cats]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={ handleSubmit }>
			<div className="field">
				<div className="control">
					<input
						type="text"
						value={ inputValue }
						className="input"
						onChange={ handleInputChange }
						/>
				</div>
			</div>
		</form>
	);
};

CategoryAdd.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default CategoryAdd;
