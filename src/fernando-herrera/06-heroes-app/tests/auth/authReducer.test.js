import authReducer from '../../auth/authReducer';
import { types } from '../../types/types';

describe('authReducer tests', () => {
	const user = {
		name: 'Frank',
		logged: false,
	};

	test('should return default state', () => {
		const state = authReducer({ logged: false }, {});

		expect(state).toEqual({ logged: false });
	});

	test('should authentic and put user\'s name', () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Frank',
			},
		};
		const state = authReducer({ logged: false }, action);

		expect(state).toEqual({ name: 'Frank', logged: true });
	});

	test('should delete name and logged in false', () => {
		const action = {
			type: types.logout,
		};
		const state = authReducer({ name: 'Frank', logged: false }, action);

		expect(state).toEqual({ logged: false });
	});
});
