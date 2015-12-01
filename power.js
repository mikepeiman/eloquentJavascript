var power = function(base, exp) {
	result = 1;
	for (var count = 0; count < exp; count++) {
		result *= base;
	}
	console.log(result);
}
power(2,10);

/* Nice to note that after learning from their example, 
I went and wrote this, without reference, slightly differently - and it still works the same!
Awesome.

Here is the example from http://eloquentjavascript.net/03_functions.html

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));