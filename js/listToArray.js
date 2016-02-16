	function listToArray(list) {
		var arr = [];
		var len = list.length;
		console.log("This list is " + len + " long.");
		for (var node = list; node; node = node.rest) {
		arr.push(node.value);
		}
		return arr;
	}; 