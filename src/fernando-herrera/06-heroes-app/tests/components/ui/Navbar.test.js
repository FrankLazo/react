import '@testing-library/jest-dom'
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import AuthContext from '../../../auth/AuthContext';
import Navbar from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('<Navbar /> tests', () => {
	const historyMock = {
		location: {},
		push: jest.fn(),
		listen: jest.fn(),
		replace: jest.fn(),
		createHref: jest.fn(),
	};

	const contextValue = {
		user: {
			logged: false,
			user: 'Frank',
		},
		dispatch: jest.fn(),
	};

	const wrapper = mount(
		<AuthContext.Provider value={ contextValue }>
			<MemoryRouter>
				<Router history={ historyMock }>
					<Navbar />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.has-text-weight-medium').text().trim()).toBe('Hello Frank!');
	});

	test('should call logout and history', () => {
		const button = wrapper.find('.button');
		button.simulate('click');

		expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
		expect(historyMock.replace).toHaveBeenCalledWith('./login');
	});
});
