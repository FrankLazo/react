const person1 = {
	fname: 'Tony',
	lname: 'Stark',
	age: 45,
	address: {
		city: 'New York',
		zip: 55321321,
		lat: 14.3232,
		lng: 34.9233,
	},
}

const person2 = { ...person1 };
person2.fname = 'Peter';

console.table( person1 );
console.table( person2 );
