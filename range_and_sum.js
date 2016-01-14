// Your code here.

var fullRange = [0];

function range(start, end, step) {
  if (arguments.length === 1) {
    console.log("got a single argument? weak!");
  }
  else if (arguments.length === 2) {
      var step = 1;
      console.log("got two arguments here");
      for (var i = start; i <= end; i += step) { fullRange.push(i); } 
  }
  else {
      console.log("got not-one and not-two arguments here");
    	for (var i = start; i <= end; i += step) { fullRange.push(i); }
  }
   return fullRange;
}
function sum(start, end, step) {
    for (var i = 1; i <= end; i += step) {
    sum += fullRange[i];
  }
}
console.log(range(10));
console.log(range(15, 2, -2));
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// → [5, 4, 3, 2]
console.log(sum(1,10,1));
// → 55