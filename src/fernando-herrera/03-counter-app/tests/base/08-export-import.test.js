import { getHeroeById, getHeroeByOwner } from "../../base/08-export-import";
import heroes from "../../data/heroes";

describe('08-export-import', () => {
	test('should be a heroe by id', () => {
		const id = 1;
		const heroe = getHeroeById(id);
		const heroeData = heroes.find(heroe => heroe.id === id);

		expect(heroe).toEqual(heroeData);
	});

	test('should be undefined', () => {
		const id = 10;
		const heroe = getHeroeById(id);

		expect(heroe).toBe(undefined);
	});

	test('should be a DC array', () => {
		const owner = 'DC';
		const heroesByOwner = getHeroeByOwner(owner);

		const heroesData = heroes.filter(heroe => heroe.owner === owner);

		expect(heroesByOwner).toEqual(heroesData);
	});

	test('should be an array with 2 elements', () => {
		const owner = 'Marvel';
		const heroesByOwner = getHeroeByOwner(owner);

		expect(heroesByOwner.length).toBe(2);
	});
});
