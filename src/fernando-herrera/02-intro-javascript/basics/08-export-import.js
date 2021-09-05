import heroes, { owners } from "../data/heroes";

const getHeroeById = (id) => heroes.find( heroe => heroe.id === id );
const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner );

// console.log( getHeroeById(2) );
// console.log( getHeroeByOwner('DC') );
// console.log( owners );

export
{
	getHeroeById,
	getHeroeByOwner,
	owners,
}
