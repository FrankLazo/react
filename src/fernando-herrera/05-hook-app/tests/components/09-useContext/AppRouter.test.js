import { mount } from 'enzyme';
import AppRouter from '../../../components/09-useContext/AppRouter';
import UserContext from '../../../components/09-useContext/UserContext';

describe('<AppRouter /> tests', () => {
	const user = {
		name: 'Frank',
		mail: 'example@mail.com',
	};

	const wrapper = mount(
		<UserContext.Provider value={{ user }}>
			<AppRouter />
		</UserContext.Provider>
	);

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
