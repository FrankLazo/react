import { getHeroeById } from "./basics/08-export-import";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const character = getHeroeById(2);
//     resolve(character);
//     reject('Heroe not found');
//   }, 2000);
// });

// promise
//   .then((heroe) => {
//     console.log(heroe);
//   })
//   .catch(err => {
//     console.warn(err);
//   });

const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const character = getHeroeById(id);

			character
			? resolve(character)
			: reject('Heroe not found');
		}, 2000);
	});
}

getHeroeByIdAsync(4)
  .then( console.log )
  .catch( console.warn );
  // .then( heroe => console.log(heroe))
  // .catch( err => console.warn(err));
