var arrays = [[1, 2, 3], [4, 5], [6],[[[13,14,15,16],17],18],19];

// how to flatten an array of arrays?
// you need a function with parameters of array (that is the array of arrays to be reduced) 
// and set reduced as an empty array (why no var keyword?)
// 
// You need to run a loop based on arrays.length;
// 		if the current element arrays[i].constructor === Array, then we want to reduce it further (recursion here)
// 		else, it must be an irreducible array element, so push it to reduced.

function flattenArrayOfArrays(array, reduced) {
	if(!reduced){ reduced = []}
	for(var i = 0; i < array.length; i++) {
		if(array[i].constructor === Array) { flattenArrayOfArrays(array[i], reduced); }
		else { reduced.push(array[i]); }
	}
	return reduced;
}
console.log(flattenArrayOfArrays(arrays,[]));
