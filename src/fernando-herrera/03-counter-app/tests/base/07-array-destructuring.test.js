import { getArray } from "../../base/07-array-destructuring"

describe('07-array-destructuring', () => {
	test('should be a number and a string', () => {
		const [string, number] = getArray();

		expect(typeof string).toBe('string');
		expect(typeof number).toBe('number');
	});
});
