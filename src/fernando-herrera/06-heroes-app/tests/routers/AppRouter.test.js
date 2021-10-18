import { mount } from 'enzyme';
import AuthContext from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('<AppRouter /> tests', () => {
	const contextValue = {
		user: {
			logged: false,
		},
		dispatch: jest.fn(),
	};

	test('should show login if it is not authenticated', () => {
		const wrapper = mount(
			<AuthContext.Provider value={{ ...contextValue }} >
				<AppRouter />
			</AuthContext.Provider>
		);

		// console.log(wrapper.html());
		expect(wrapper).toMatchSnapshot();
	});

	test('should show marvel component if it is authenticated', () => {
		const contextValue = {
			user: {
				name: 'Frank',
				logged: true,
			},
			dispatch: jest.fn(),
		};

		const wrapper = mount(
			<AuthContext.Provider value={{ ...contextValue }} >
				<AppRouter />
			</AuthContext.Provider>
		);

		// console.log(wrapper.html());
		expect(wrapper.find('.navbar').exists()).toBe(true);
	});
});
