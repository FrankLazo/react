const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5];
const array3 = array2.map(function( element ) {
  	return element * 2;
});

console.log( array1 );
console.log( array2 );
console.log( array3 );
