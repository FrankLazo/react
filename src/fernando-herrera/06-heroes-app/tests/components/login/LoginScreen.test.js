import { mount } from 'enzyme';
import AuthContext from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('<LoginScreen /> tests', () => {
	const historyMock = {
		replace: jest.fn(),
	};

	const contextValue = {
		dispatch: jest.fn(),
	};

	localStorage.setItem('lastPath', '/dc');

	const wrapper = mount(
		<AuthContext.Provider value={ contextValue }>
			<LoginScreen history={ historyMock } />
		</AuthContext.Provider>
	);

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should does the dispatch and navegation', () => {
		const handleClick = wrapper.find('button').prop('onClick');
		handleClick();

		// expect(contextValue.dispatch).toHaveBeenCalledWith({
		// 	type: types.login,
		// 	payload: {
		// 		user: 'Frank'
		// 	},
		// });
		// expect(historyMock.replace).toHaveBeenCalledWith('/');

		expect(historyMock.replace).toHaveBeenCalledWith('/dc');
	});
});
