import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import demoTodos from '../../fixtures/demoTodos';

describe('<TodoListItem /> tests', () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();

	const wrapper = shallow(
		<TodoListItem
			todo={ demoTodos[0] }
			index={ 0 }
			handleToggle={ handleToggle }
			handleDelete={ handleDelete }
			/>
	);

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should call handleDelete function', () => {
		const deleteButton = wrapper.find('button').at(1);
		deleteButton.simulate('click');

		expect(handleDelete).toHaveBeenCalledWith( demoTodos[0].id );
	});

	test('should call handleDelete function', () => {
		const toggleButton = wrapper.find('div').at(0);
		toggleButton.simulate('click');

		expect(handleToggle).toHaveBeenCalledWith( demoTodos[0].id );
	});

	test('should show the right component content', () => {
		const content = `1. ${ demoTodos[0].description }`

		expect(wrapper.find('div').at(0).text().trim()).toBe(content);
	});

	test('should show the complete class in div', () => {
		expect(wrapper.find('div').at(0).hasClass('has-text-grey-dark')).toBe(true);
	});
});
