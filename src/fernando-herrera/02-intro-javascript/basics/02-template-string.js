const fname = 'Frank';
const lname = 'Lazo';

const fullname = `${ fname } ${ lname }`;

function getGreetings(name)
{
  	return `Hello ${ name }!`;
}

console.log( `This is a text: ${ getGreetings( fullname ) }` );
