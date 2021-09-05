const characters = ['Gokú', 'Vegeta', 'Trunks', () => console.log('Hello world!')];
const [ , , char3, func ] = characters;

console.log( char3 );
func();