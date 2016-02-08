/* first attempt
var arrayValue = [];
function arrayToList(arrayValue) {
  var len = arrayValue.length;
  var last = 0;
  var myList = {
    value: 0,
    rest: null 
  };
    for (var i = 0; i < len; i++) {
      console.log("Loop tracker: iteration " + i);
      last = arrayValue.pop();
      console.log("  last value currently " + last);
      console.log("  rest value currently " + myList.rest);
      console.log("  myList currently " + myList);
      arrayValue.splice(i,0,last);
      console.log('Operations performed.');
      console.log("  last value currently " + last);
      console.log("  rest value currently " + myList.rest);
      console.log("  myList currently " + myList);
      console.log("  arrayValue currently looks like " + arrayValue);
  }
  	return arrayValue;
}
*/
/* second attempt, found a gist on github for this https://gist.github.com/laichejl/32d98af04caa66bd195f
*/

function arrayToList(thisArray) {
  var list = null;
  var len = thisArray.length;
  console.log("This array is " + len + " long.");
  for (var i = len; i > 0; i--) {
    list = { value: thisArray[i-1], rest: list };
  }
  return list;
};

console.log(arrayToList([10, 20, 30]));
console.log(arrayToList(["Earth", "Metal", "Water", "Wood", "Fire"]));

/* works as it should. I ran my counter a little differently than laichejl; having it reflect the array length
and make the array position shift in the value assignment makes more sense to me. */

function listElemental(thisArray) {
  var element = {
    elementName: "",
    elementCreates: "",
    elementControls: "",
    elementCreatedBy: "",
    elementControlledBy: "" };
  var elementList = [];
  var lenArray = thisArray.length;
  var lenElement = element.length;

  console.log("This array is " + lenArray + " long.");
  console.log("The element object is " + lenElement + " long.");

  for (var index = 0; index < lenArray; index++) {
    if (index === (lenArray - 2)) {
      console.log("Index is currently thisArray.length - 2");
      elementList[index] = { 
        elementName: thisArray[index],
        elementCreates: thisArray[index + 1],
        elementControls: thisArray[0],};

    }
    else if (index === (lenArray - 1)) {
      console.log("Index is currently thisArray.length - 1");
      elementList[index] = { 
        elementName: thisArray[index],
        elementCreates: thisArray[0],
        elementControls: thisArray[1], };

    } else {
      console.log("Index is iterating upward from " + index);
      elementList[index] = {
        elementName: thisArray[index],
        elementCreates: thisArray[index+1],
        elementControls: thisArray[index+2], };

  }
  var elementName = elementList[index].elementName;
  var elementCreates = elementList[index].elementCreates;
  var elementControls = elementList[index].elementControls;
  var elementCreatedBy = elementList[index].elementCreatedBy;
  var elementControlledBy = elementList[index].elementControlledBy;
  console.log('The element ' + elementName + ":/n" +
    "   Creates " + elementCreates + "/n" +
    "   Controls " + elementControls + "/n" +
    "   Created by " + elementCreatedBy + "/n" +
    "   Controlled by " + elementControlledBy + "/n");
}
    return elementList;
};
console.log(listElemental(["Earth", "Metal", "Water", "Wood", "Fire"]));
console.log(arrayToList([1, 2, 3, 4, 5, 6, 7]));

function listToArray(list) {
  var arr = [];
  var len = list.length;
  console.log("This list is " + len + " long.");
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

console.log(listToArray(arrayToList([10, 20, 30])))

/* works correctly. Had to use hint for the for-loop structure, as well as referenced
https://funkycold.wordpress.com/2015/04/12/learning-javascript-eloquent-js-ch4-data-structures-objects-and-arrays/
That blogger used a while loop, more succinct than the for version, but it was the proper usage of push in this instance
that provided the final assist. */
//function prepend()

//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}