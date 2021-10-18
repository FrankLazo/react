import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

describe('<SearchScreen /> tests', () => {
	const historyMock = {
		push: jest.fn(),
	};

	test('should show component with default values', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<Route path="/search" component={ SearchScreen } />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('button').text().trim()).toBe('Search');
	});

	test('should show component with queryString value', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<Route path="/search" component={ SearchScreen } />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('input').prop('value').trim()).toBe('batman');
	});

	test('should show error if hero is not found', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=batman123']}>
				<Route path="/search" component={ SearchScreen } />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.is-danger').exists()).toBe(true);
	});

	test('should call to history\'s push', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<Route
					path="/search"
					component={() => <SearchScreen history={ historyMock } /> } />
			</MemoryRouter>
		);

		wrapper.find('input').simulate('change', {
			target: {
				name: 'searchText',
				value: 'batman',
			},
		});

		const handleSubmit = wrapper.find('form').prop('onSubmit');

		handleSubmit({ preventDefault(){} });
		expect(historyMock.push).toHaveBeenCalledWith('?q=batman');
	});
});
