var fizz = 3;
var buzz = 5;
var currentNum = 1;
for (currentNum; currentNum <=100; currentNum++) {
	if (currentNum % (fizz * buzz) == 0) {
		console.log("FizzBuzz, yeah!!!"); }
	else if (currentNum % fizz === 0) {
		console.log("Fizz!"); }
	else if (currentNum % buzz === 0) {
		console.log("Buzz!") }
	else {
		console.log(currentNum); }
	}
