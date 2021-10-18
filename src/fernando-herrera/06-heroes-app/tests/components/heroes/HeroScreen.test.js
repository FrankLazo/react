import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import HeroeScreen from '../../../components/heroes/HeroScreen';

describe('<HeroScreen /> tests', () => {
	const history = {
		push: jest.fn(),
		goBack: jest.fn(),
		length: 10,
	};

	test('should show the Redirect component if there is not arguments in URL', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero']}>
				<HeroeScreen history={ history } />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('Redirect').exists()).toBe(true);
	});

	test('should show a Hero if the arguments exists', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:heroId" component={ HeroeScreen } />
			</MemoryRouter>
		);

		expect(wrapper.find('.container').exists()).toBe(true);
	});

	test('should return to before page with push', () => {
		const history = {
			push: jest.fn(),
			goBack: jest.fn(),
			length: 1,
		};

		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route
					path="/hero/:heroId"
					component={ () => <HeroeScreen history={ history } /> } />
			</MemoryRouter>
		);

		const button = wrapper.find('button');
		button.prop('onClick')();

		expect(history.push).toHaveBeenCalledWith('/');
		expect(history.goBack).not.toHaveBeenCalled();
	});

	test('should return to before page with goBack', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route
					path="/hero/:heroId"
					component={ () => <HeroeScreen history={ history } /> } />
			</MemoryRouter>
		);

		const button = wrapper.find('button');
		button.prop('onClick')();

		expect(history.goBack).toHaveBeenCalledTimes(1);
		expect(history.push).toHaveBeenCalledTimes(0);
	});

	test('should call Redirect if hero not exists', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider123456789']}>
				<Route
					path="/hero/:heroId"
					component={ () => <HeroeScreen history={ history } /> } />
			</MemoryRouter>
		);

		expect(wrapper.text()).toBe('');
	});
});
