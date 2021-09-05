const fname = 'Frank';
const lname = 'Lazo';

const fullname = `${ fname } ${ lname }`;

export function getGreetings(name = 'Fred')
{
  	return `Hello ${ name }!`;
}

// console.log( `This is a text: ${ getGreetings( fullname ) }` );
