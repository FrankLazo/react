import { mount } from 'enzyme';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import UserContext from '../../../components/09-useContext/UserContext';

describe('<HomeScreen /> tests', () => {
	const user = {
		name: 'Frank',
		mail: 'example@mail.com',
	};

	const wrapper = mount(
		<UserContext.Provider value={{ user }}>
			<HomeScreen />
		</UserContext.Provider>
	);

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
