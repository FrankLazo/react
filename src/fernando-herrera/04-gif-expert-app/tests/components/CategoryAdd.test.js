// import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CategoryAdd from '../../components/CategoryAdd';

describe('Tests on CategoryAdd', () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<CategoryAdd setCategories={ setCategories } />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<CategoryAdd setCategories={ setCategories } />);
	});

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should change text input', () => {
		const input = wrapper.find('input');
		const value = 'Hello world!';

		input.simulate('change', { target: { value: value } });
	});

	test('should not post info by submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault(){} });
		expect(setCategories).not.toHaveBeenCalled();
	});

	test('should call setCategories and clean text input', () => {
		const value = 'Hello world!';

		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledTimes(1);
		expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
