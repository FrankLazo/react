import { mount } from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import UserContext from '../../../components/09-useContext/UserContext';

describe('<LoginScreen /> tests', () => {
	const setUser = jest.fn();

	const wrapper = mount(
		<UserContext.Provider value={{ setUser }}>
			<LoginScreen />
		</UserContext.Provider>
	);

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should call setUser with the right arguments', () => {
		const button = wrapper.find('button');
		button.simulate('click');

		// Otra manera
		// wrapper.find('button').prop('onClick')();

		expect(setUser).toHaveBeenCalledWith({ id: 123, name: 'Frank' });
	});
});
