function deepEqual(x, y) {
	if (x === y) {
		return true;
	}

	if (x == null || y == null){
		return false;
	}

	if (typeof x == "object" && typeof y == "object") {
		var keysX = Object.keys(x);
		var keysY = Object.keys(y); // is it fair to say that keys == properties, as a definition? key:value pairs?
		
		if (keysX.length !== keysY.length) {
			return false;
		}
		for(var i in x) {
			if(deepEqual(x[i], y[i]) === false) {
				return false;
			}
		}
		return true;
	}
	return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));