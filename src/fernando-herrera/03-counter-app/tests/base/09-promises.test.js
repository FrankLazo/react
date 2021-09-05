import { getHeroeByIdAsync } from "../../base/09-promises";
import heroes from "../../data/heroes";

describe('09-promises', () => {
    test('should return an async heroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('should be an error if heroe no exists', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('Heroe not found');
                done();
            });
    });
});
