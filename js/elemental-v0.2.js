
/*		function prepend(value, rest) {
			return {
				value: value,
				rest: rest
			};
		} 
* The above is code from https://funkycold.wordpress.com/2015/04/12/learning-javascript-eloquent-js-ch4-data-structures-objects-and-arrays/

I'm going to try the same idea with different labels to see if it helps my conceptual understanding.
*/
	function prepend(element, list) {
			return { value: element, rest: list	};
		}

	function HTMLli(array) {
			var len = array.length;
			for (var i = 0; i < len; i++) {
				array[i] = "<li>" + array[i] + "</li>";
			}
			return array;
		}
//******************************************************************************************************
	function arrayToList1(thisInput) {
		var thisInput = document.getElementById("input-1").value;
		var thisArray = thisInput.split(",");
		var len = thisArray.length;
		var list = null;
		document.getElementById("output-1a").innerHTML = "You entered " + len + " items.";
		for (var i = 1; i <= len; i++) {
			list = { value: thisArray[i-1], rest: list }; 
			document.getElementById("output-1b").innerHTML += "<li>Iteration " + i
				+ ". " + list + "</li>";
			}
		return list;
		}

//******************************************************************************************************
		function arrayToList2(thisInput) {
		var thisInput = document.getElementById("input-2").value;
		var thisArray = thisInput.split(",");
		var len = thisArray.length;
		var list = null;
		var index = 0;
		document.getElementById("output-2a").innerHTML = "You entered " + len + " items.";
		document.getElementById("output-2b").innerHTML = "You entered these items: " + thisArray;

		for (var index = 1; index <= len; index++) {
			list = prepend(thisArray[len-index], list);
	//		document.getElementById("output-2c").innerHTML = "Element at location " + index + " is " + thisArray[index];
	//		document.getElementById("output-2d").innerHTML = "Element at location " + (len-index) + " is " + thisArray[len-index];
			document.getElementById("output-2d").innerHTML += "<li>Iteration " + index
				+ ". " + JSON.stringify(list, null, 4) + "</li>";
			}
		document.getElementById("output-2e").innerHTML = "Final list " + JSON.stringify(list, null, 4);
		return list;
		}
//******************************************************************************************************
		function arrayToList3(thisInput) {
		var thisInput = document.getElementById("input-3").value;
		var initialArray = thisInput.split(",");
		var thisArray = HTMLli(initialArray);
		document.getElementById("output-3b").innerHTML = "After HTMLli: " + thisArray;
		var len = thisArray.length;
		var list = null;
		var index = 0;
		document.getElementById("output-3a").innerHTML = "You entered " + len + " items.";
		document.getElementById("output-3c").innerHTML = "You entered these items: " + thisArray;

		for (var index = 1; index <= len; index++) {
			list = prepend(thisArray[len-index], list);
	//		document.getElementById("output-3c").innerHTML = "Element at location " + index + " is " + thisArray[index];
	//		document.getElementById("output-3d").innerHTML = "Element at location " + (len-index) + " is " + thisArray[len-index];
			document.getElementById("output-3d").innerHTML += "Iteration " + index
				+ ". " + JSON.stringify(list, null, 4);
			}
		document.getElementById("output-3e").innerHTML = "Final list " + JSON.stringify(list, null, 4);
		return list;
		}
//******************************************************************************************************
		function arrayToList4(thisInput) {
		var thisInput = document.getElementById("input-4").value;
		var thisArray = thisInput.split(",");
		var len = thisArray.length;
		var list = null;
		document.getElementById("output-4a").innerHTML = "You entered " + len + " items.";
		for (var i = 1; i <= len; i++) {
			list = prepend(thisArray[len-i], list);
			document.getElementById("output-4b").innerHTML += "<li>Iteration " + i
				+ ". " + listToArray(list) + "</li>";
			}
		return list;
		}
/* it works to present the array broken down iteration by iteration, but it does not display a nested list of objects. */

	function checkSubmit1(event) {
		if(event && event.keyCode == 13) {
			arrayToList1();
			}
		}
	function checkSubmit2(event) {
	if(event && event.keyCode == 13) {
		arrayToList2();
		}
	}
	function checkSubmit3(event) {
	if(event && event.keyCode == 13) {
		arrayToList3();
		}
	}
	function checkSubmit4(event) {
	if(event && event.keyCode == 13) {
		arrayToList4();
		}
	}
	function listToArray(list) {
		var arr = [];
		var len = list.length;
		console.log("This list is " + len + " long.");
		for (var node = list; node; node = node.rest) {
		arr.push(node.value);
		}
		return arr;
	}; 