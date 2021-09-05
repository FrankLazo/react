import { getActiveUser, getUser } from '../../base/05-functions';

describe('05-functions.test.js', () => {
	test('getUser should be an object', () => {
		const testUser = {
			id: 'ABC123',
			name: 'Frank',
		}

		const user = getUser();

		expect(user).toEqual(testUser);
	});

	test('getActiveUser should be an object', () => {
		const name = 'Frank';

		const testUser = {
			id: 'ABC567',
			name: name,
		}

		const user = getActiveUser(name);

		expect(user).toEqual(testUser);
	});
});
