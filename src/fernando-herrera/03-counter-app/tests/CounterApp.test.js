import { shallow } from 'enzyme';
import CounterApp from "../CounterApp";

describe('CounterApp', () => {
	// Para no perder el intellisense
	let wrapper = shallow(<CounterApp />);

	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

	test('should be <CounterApp />', () => {
		const defaultValue = wrapper.find('p').text();

		// expect(wrapper).toMatchSnapshot();
		expect(defaultValue).toBe('10');
	});

	test('should be 100', () => {
		const wrapper = shallow(<CounterApp value={100} />);
		const value = wrapper.find('p').text().trim();

		expect(value).toBe('100');
	});

	test('should increment by 1', () => {
		wrapper.find('button').at(0).simulate('click');
		const value = wrapper.find('p').text().trim();
		expect(value).toBe('11');
	});

	test('should decrement by 1', () => {
		wrapper.find('button').at(2).simulate('click');
		const value = wrapper.find('p').text().trim();
		expect(value).toBe('9');
	});

	test('shoud reset to default value', () => {
		const wrapper = shallow(<CounterApp value={50} />);

		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');

		const value = wrapper.find('p').text().trim();
		expect(value).toBe('50');
	});
});
