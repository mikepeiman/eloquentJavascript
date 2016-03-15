function countdown(value) {
	if (value > 0) {
	console.log(value);
	return countdown(value - 1);
	} else {
	return value;
	}
}
countdown(9);

function factorial(number) {
	if (number <= 0) {
		return 1;
	} else {
		return (number * factorial(number - 1));
	}
}
console.log(factorial(10));

function fibonacci(depth) {
	if(depth <= 2) {
		return 1;
	} else {
		var f1 = fibonacci(depth - 1), f2 = fibonacci(depth - 2);
		return  (f1 + f2);
	}
}
console.log(fibonacci(10));