const person = {
	name: 'Tony',
	age: 45,
	key: 'Ironman',
}

const getPerson = ({ name, age, key, rank = 'Soldier' }) => {
	return {
		keyName: name,
		age: age,
		latlng: {
			lat: 14.1232,
			lng: 12.3232,
		}
	}
}

const { keyName: name, age, latlng: { lat, lng } } = getPerson( person );

console.log( name, age, lat, lng );
