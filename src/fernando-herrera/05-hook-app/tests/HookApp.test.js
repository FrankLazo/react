import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Hook app tests', () => {
	test('should show the right component', () => {
		const wrapper = shallow(<HookApp />);
		expect(wrapper).toMatchSnapshot();
	});

});
