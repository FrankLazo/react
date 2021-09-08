import { shallow } from 'enzyme';
import GifExpertApp from "../GifExpertApp";

describe('Tests on <GifExpertApp />', () => {
	test('should show the right component', () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show a categories list', () => {
		const categories = ['Megadeth', 'Metallica'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});
