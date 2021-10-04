import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe('<TodoAdd /> tests', () => {
	const handleAddTodo = jest.fn();
	const wrapper = shallow(<TodoAdd handleAddTodo={ handleAddTodo } />);

	test('should show the right component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should not call handleAddTodo', () => {
		const formSubmit = wrapper.find('form').prop('onSubmit');
		formSubmit( { preventDefault(){} } );

		expect(handleAddTodo).not.toHaveBeenCalled();
	});

	test('should call handleAddTodo', () => {
		const value = 'Learn React';
		const input = wrapper.find('input');

		input.simulate('change', { target: { value, name: 'description' } });

		const formSubmit = wrapper.find('form').prop('onSubmit');
		formSubmit( { preventDefault(){} } );

		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object) );
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number),
			description: value,
			done: false,
		});
		expect(input.prop('value')).toBe('');	// Para verificar el efecto de reset()
	});
});
