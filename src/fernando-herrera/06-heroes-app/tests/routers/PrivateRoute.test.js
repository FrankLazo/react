import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../routers/PrivateRoute';

describe('<PrivateRoute /> tests', () => {
	const props = {
		location: {
			pathname: '/marvel',
		},
	};

	Storage.prototype.setItem = jest.fn();

	test('should show component if it is authenticated and save on localStorage', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAuthenticated={ true }
					component={ () => <span>Ready!!!</span> }
					{ ...props }
					/>
			</MemoryRouter>
		);

		// console.log(wrapper.html());

		expect(wrapper.find('span').exists()).toBe(true);
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
	});

	test('should block component if it is not authenticated', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAuthenticated={ false }
					component={ () => <span>Ready!!!</span> }
					{ ...props }
					/>
			</MemoryRouter>
		);

		expect(wrapper.find('span').exists()).toBe(false);
	});
});
