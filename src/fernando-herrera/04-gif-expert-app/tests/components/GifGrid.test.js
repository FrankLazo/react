import { shallow } from 'enzyme';
import GifGrid from "../../components/GifGrid";
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests on GifGrid', () => {
	const category = 'Megadeth';

	test('should show the right component and match with the snapshot', () => {
		useFetchGifs.mockReturnValue({
			data:    [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={ category } />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show items when load images with useFetchGifs', () => {
		const gifs = [{
			id:    'abc',
			url:   'https://localhost/anything.jpg',
			title: 'Anything',
		},];

		useFetchGifs.mockReturnValue({
			data:    gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={ category } />);

		expect(wrapper).toMatchSnapshot();
		expect( wrapper.find('p').exists() ).toBe(false);
		expect( wrapper.find('GifGridItem').length).toBe(gifs.length);
	});

});
