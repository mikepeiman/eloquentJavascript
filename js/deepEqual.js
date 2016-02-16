function deepEqual(thing1, thing2) {
	if (typeof thing1 == "object" && thing1 != null) {
		var obj1 = true; 
	} else {
		var obj1 = false;
	}
	if (typeof thing2 == "object" && thing2 != null) {
		var obj2 = true; 
	} else {
		var obj2 = false;
	}
	if (obj1, obj2) {
		if (thing1.value === thing2.value) {
			return true;
		} else {
			return false;
		}
	} else {
		return obj1 === obj2;
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));