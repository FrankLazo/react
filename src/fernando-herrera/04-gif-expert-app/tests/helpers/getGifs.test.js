import getGifs from "../../helpers/getGifs";

describe('Tests on getGifs', () => {
	test('should return 10 elements', async () => {
		const gifs = await getGifs('Megadeth');
		expect(gifs.length).toBe(10);
	});

	test('should return no elements', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});
