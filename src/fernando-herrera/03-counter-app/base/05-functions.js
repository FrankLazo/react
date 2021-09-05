// traditional function

const hello1 = function( name ) {
  	return `Hello ${ name }!`;
}

// arrow function

const hello2 = ( name ) => {
  	return `Hello ${ name }!`;
}

const hello3 = name => `Hello ${ name }!`;

const hello4 = () => ({
	id: 1234,
	name: 'Frank',
});

export const getUser = () => ({
	id: 'ABC123',
	name: 'Frank',
});

export const getActiveUser = (name) => ({
	id: 'ABC567',
	name: name,
});

// console.log( hello1('Frank'), hello2('Lazo'), hello3('User'), hello4() );
