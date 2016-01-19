function reverseArray(oldArray) {
  var newArray = [];
  for (var i = (oldArray.length - 1); i >= 0; i--) {
    var thisElement = oldArray[i];
    newArray.push(thisElement);
  }
  return newArray;
}
var oldArray = ["A", "B", "C", "57", "78", "99"];
console.log(reverseArray(oldArray)); 

var arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arrayValue) {
	var len = arrayValue.length;

/*	 Pseudo-code working it through
		   	pop the last value off the array
	    	we want this value placed at the selfsame index as the iteration counter i
	    		this means we will concatenate it 
	    			after a slice of the array before i, and
	    			before a slice of the array after i 
	var sliceOne = [];
	var sliceTwo = [];
	for (var i = 0; i < len; i++) {
	    console.log("Loop tracker: iteration " + i);
	    	thisElement = arrayValue.pop();
	    		console.log("thisElement: " + thisElement);
	    	sliceOne = arrayValue.slice(0, i);
	    		console.log("sliceOne: " + sliceOne);
	    	sliceTwo = arrayValue.slice(i);
				console.log("sliceTwo: " + sliceTwo);
	    	arrayValue.concat(sliceOne).concat(thisElement).concat(sliceTwo);
	    		console.log("arrayValue: " + arrayValue);
	*/
/*	 Pseudo-code #2
		   	ourSlice = slice (arrayValue[length-1])
		   	unshift (meaning pin it to the front) ourSlice to arrayValue
	    			
	    	var ourSlice = arrayValue.slice(len-i);
	    	arrayValue.unshift(ourSlice);
	    	console.log("arrayValue now stands at: " + arrayValue);

	}*/
/*	 Pseudo-code #3
		   	pop a piece off the end, stick it in the right place in the array. That means take a slice
		   	off the front and unshift that piece you popped (stick it in there). Don't forget to
		   	remount that frontSlice by unshifting it at the end.
		   	var thePop = [];
		   	var theSlice = [];
	for (var i = 0; i < len; i++) {
	    console.log("Loop tracker: iteration " + i);
	    	thePop = arrayValue.pop();
	    	theShift = arrayValue.shift();
	    	console.log("1. arrayValue now stands at: " + arrayValue);
	    	console.log("1. thePop now stands at: " + thePop);
	    	console.log("1. theShift now stands at: " + theShift);
	    	arrayValue.unshift(thePop);
	    	console.log("2. arrayValue now stands at: " + arrayValue);
	    	arrayValue.unshift(theShift);
	    	console.log("3. arrayValue now stands at: " + arrayValue);
}*/
/*	 Pseudo-code #3
		   	pop a piece off the end, stick it in the right place in the array. That means take a slice
		   	off the front and unshift that piece you popped (stick it in there). Don't forget to
		   	remount that frontSlice by unshifting it at the end.
		   	var thePop = [];
		   	var theSlice = [];
	for (var i = 0; i < len; i++) {
	    console.log("Loop tracker: iteration " + i);
	    	thePop = arrayValue.pop();
	    	theShift = arrayValue.shift();
	    	console.log("1. arrayValue now stands at: " + arrayValue);
	    	console.log("1. thePop now stands at: " + thePop);
	    	console.log("1. theShift now stands at: " + theShift);
	    	arrayValue.unshift(thePop);
	    	console.log("2. arrayValue now stands at: " + arrayValue);
	    	arrayValue.unshift(theShift);
	    	console.log("3. arrayValue now stands at: " + arrayValue);
}*/ /* Attempt #4, having looked up array methods and learned about splice
		iteration 0: 1,2,3,4,5
		pop off last item ("5", at array length - 1)
		splice it into the array at (iteration) = 0
		array: 5,1,2,3,4
	
		iteration 1:
		pop off last item ("4", at array length - 1)
		splice it into the array at (iteration) = 1
		array: 5,4,1,2,3

		iteration 2:
		pop off last item ("3", at array length - 1)
		splice it into the array at (iteration) = 2
		array: 5,4,3,1,2

		iteration 3:
		pop off last item ("2", at array length - 1)
		splice it into the array at (iteration) = 3
		array: 5,4,3,2,1

		iteration 3:
		pop off last item ("1", at array length - 1)
		splice it into the array at (iteration) = 4
		array: 5,4,3,2,1 // this effectively changes nothing, but it still logically completes the function
		*/
		var last = "";
		for (var i = 0; i < len; i++) {
			console.log("Loop tracker: iteration " + i);
			last = arrayValue.pop();
			console.log("last value currently " + last);
			arrayValue.splice(i,0,last);
			console.log("arrayValue currently looks like " + arrayValue);
		}
  	return arrayValue;
} // and it works!! 9:32am 1-19-2016. Spent some hours on this one.

console.log(typeof(arrayValue));
console.log("Now running reverseArrayInPlace...");
reverseArrayInPlace(arrayValue);
console.log("Now displaying final arrayValue: ");
console.log(arrayValue);