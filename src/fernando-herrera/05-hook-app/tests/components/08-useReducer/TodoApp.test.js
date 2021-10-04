import { act } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import TodoApp from "../../../components/08-useReducer/TodoApp"
import demoTodos from '../../fixtures/demoTodos';

describe('<TodoApp /> tests', () => {
	const wrapper = shallow(<TodoApp />);

	Storage.prototype.setItem = jest.fn(() => {});

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should add a todo', () => {
		const wrapper = mount(<TodoApp />);

		act(() => {
			wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
			wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
		});

		expect(wrapper.find('span').text().trim()).toBe('2');
		expect(localStorage.setItem).toHaveBeenCalledTimes(2);
	});

	test('should delete one todo', () => {
		wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
		wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

		expect(wrapper.find('span').text().trim()).toBe('0');
	});
});
