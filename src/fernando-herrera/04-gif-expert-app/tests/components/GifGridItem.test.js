import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Gif Grid Item', () => {
	const title = 'Image title';
	const url   = 'https://localhost/something.jpg';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('should show right component <GifGridItem />', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should have a paragraph with title', () => {
		const paragraph = wrapper.find('p');
		expect(paragraph.text().trim()).toBe(title);
	});

	test('should have a image with url and title', () => {
		const image = wrapper.find('img');
		expect(image.prop('src')).toBe(url);
		expect(image.prop('alt')).toBe(title);
	});

	test('should have animate__fadeIn', () => {
		const div = wrapper.find('.card');

		// const className = div.prop('className');
		// expect(className.includes('animate__fadeIn')).toBe(true);

		expect(div.hasClass('animate__fadeIn')).toBe(true);
	});
});
