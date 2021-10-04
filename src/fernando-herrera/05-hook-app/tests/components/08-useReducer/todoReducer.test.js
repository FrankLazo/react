import todoReducer from '../../../components/08-useReducer/todoReducer';
import demoTodos from '../../fixtures/demoTodos';

describe('todoReducer tests', () => {
	test('should return default state', () => {
		const state = todoReducer(demoTodos, {});
		expect(state).toEqual(demoTodos);
	});

	test('should add one todo', () => {
		const newTodo = {
			id: 3,
			description: 'Learn Express',
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		};

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(3);
		expect(state).toEqual([ ...demoTodos, newTodo ]);
	});

	test('should delete one todo', () => {
		const action = {
			type: 'delete',
			payload: 2,
		};

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(1);
		expect(state).toEqual([ demoTodos[0] ]);
	});

	test('should toggle one todo', () => {
		const action = {
			type: 'toggle',
			payload: 2,
		};

		const state = todoReducer(demoTodos, action);

		expect(state[1].done).toBe(true);
		expect(state[0]).toEqual(demoTodos[0]);
	});
});
