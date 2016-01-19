/* 
this is supposed to be an exercise in recursion, but this was the obvious solution for me, and I don't seem
to understand recursion well enough to write this function recursively yet 12-1-2015

function isEven(checkNum) {
	var even = 0, odd = 1;
	if (checkNum % 2 == even) 
		return true;
	else if ((checkNum -1) % 2 == even) 
		return false;
	}
 */
/* 
here is the given solution/example in recursion for even/odd numbers

console.log("EloquentJavascript solution given");
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}


*/

/*
Here is the earlier exercise in recursion; copied code, I couldn't come up with this yet. 
*/

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));

// 1-13-2016 with the hint I was able to write this out
// Your code here.
console.log("2016-1-13 effort");
 function isEven(number) {
  if (number === 0) { return true; }
  else if (number === 1) { return false; }
  else if (number < 0) { return(isEven(-number)); }
  else { return isEven(number-2); }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(751)); 
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-4));
// → true
console.log(isEven(-9));
// → false