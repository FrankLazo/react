import { getHeroeById } from "./08-export-import";

export const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const character = getHeroeById(id);

			character
			? resolve(character)
			: reject('Heroe not found');
		}, 1500);
	});
}
