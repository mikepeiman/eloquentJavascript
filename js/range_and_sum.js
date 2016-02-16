// Your code here.

var fullRange = [];

function range(start, end, step) {
  if (arguments.length === 1) {
    return("got a single argument? weak! Terminate this shite.");
  }
  else if (arguments.length === 2) {
      var step = 1;
      var fullRange = [];
      console.log("Arguments: " + arguments.length);
      for (var i = start; i <= end; i += step) { fullRange.push(i); } 
      for (var i = start; i >= end; i += step) { fullRange.push(i); } 
      return fullRange;
  }
  else {
      console.log("Arguments: " + arguments.length);
      var fullRange = [];
    	for (var i = start; i <= end; i += step) { fullRange.push(i); }
      for (var i = start; i >= end; i += step) { fullRange.push(i); } 
  }
   return fullRange;
   return step;
}
function sum(fullRange) {
    console.log("Arguments: " + arguments.length);
    console.log("Range length: " + fullRange.length);
    var sumRange = 999;
    console.log("sumRange set as " + sumRange);
    var sumRange = fullRange[0];
    console.log("Assigned from fullRange: " + sumRange);
    var step = 1;
    for (var i = 1, len = fullRange.length; i < len; i += step) {
      console.log("Iteration " + i);
      console.log("Current sum of the range: " + sumRange);
      if (i === len) return
      sumRange += fullRange[i];
  }
      console.log("The sum of that range is " + sumRange);
      return sumRange;

}
console.log(range(10));
console.log(range(15, 2, -2));
console.log(range(1, 10));
console.log(sum(range(1,10,1)));
