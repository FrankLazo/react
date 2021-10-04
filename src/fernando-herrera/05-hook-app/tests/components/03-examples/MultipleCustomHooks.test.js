import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import useCounter from '../../../hooks/useCounter';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('<MultipleCustomHooks /> tests', () => {
	beforeEach(() => {
		useCounter.mockReturnValue({
			state: 10,
			increment: () => {},
			decrement: () => {},
			reset: () => {},
		});
	});

	test('should show the right component', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show the information', () => {
		useFetch.mockReturnValue({
			data: [{
				author: 'Frank Lazo',
				quote: 'Hello world!',
			}],
			loading: false,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper.find('.notification').exists()).toBe(false);
		expect(wrapper.find('blockquote p:first-child').text().trim()).toBe('Hello world!');
		expect(wrapper.find('blockquote p:last-child').text().trim()).toBe('Frank Lazo');
	});

});
