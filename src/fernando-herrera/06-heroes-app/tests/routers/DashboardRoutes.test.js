import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';

describe('<DashboardRoutes /> tests', () => {
	const contextValue = {
		user: {
			user: 'Frank',
		},
		dispatch: jest.fn(),
	};

	test('should show the right component', () => {
		const wrapper = mount(
			<AuthContext.Provider value={{ ...contextValue }} >
				<MemoryRouter>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.has-text-weight-medium').text().trim()).toBe('Hello Frank!');
	});
});
