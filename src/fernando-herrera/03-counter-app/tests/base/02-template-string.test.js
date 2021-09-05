import { getGreetings } from '../../base/02-template-string';

describe('02-template-string.js', () => {
	test('getGreetings should be Hello Frank!', () => {
		const name = 'Frank';
		const welcome = getGreetings(name);
		expect(welcome).toBe(`Hello ${ name }!`);
	});

	test('getGreetings should be Hello Fred! without parameters', () => {
		const welcome = getGreetings();
		expect(welcome).toBe(`Hello Fred!`);
	});
})
