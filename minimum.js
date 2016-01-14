function min(first, second) {
	return Math.min(first, second);
}

// Long version
function min(one, two) {
  if (one < two) {
    return one; }
  else if (one > two) {
    return two; }
  else {
    return('Equal!');
  }
}
console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(5, 5));
console.log(min(0, 10));