/* 
*
* Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array
* that has all the elements of the input arrays.
*/ 

var arrays = [[1, 2, 3], [4, 5], [6],[[[13,14,15,16],17],18],19];

/*
three different methods follow.
 */
//#1
var conArray = [].concat.apply([], arrays);
console.log(conArray);
//#2
var flattened = arrays.reduce(function(a, b) { return a.concat(b) }, []);
console.log(flattened);
//#3
function flattenArrayOfArrays(array, reduced){
    if(!reduced){ reduced = []}
    for(var i=0; i<array.length; i++){
        if(array[i].constructor == Array){
            flattenArrayOfArrays(array[i], reduced);
        }else{
            reduced.push(array[i]);
        }
    }
    return reduced;
}
console.log(flattenArrayOfArrays(arrays,[]));

// → [1, 2, 3, 4, 5, 6]
// 
/*
function processArray(arr, callback) {
    var resultArr = new Array(); 
    for (var i = arr.length-1; i >= 0; i--)
        resultArr[i] = callback(arr[i]);
    return resultArr;
}

var arr = [1, 2, 3, 4];
var arrReturned = processArray(arr, function(arg) {return arg * -1;});
// arrReturned would be [-1, -2, -3, -4]
console.log(arrReturned);
*/

function processArray(arr, arg) {
    var resultArr = new Array(); 
    for (var i = arr.length-1; i >= 0; i--)
        resultArr[i] = arr[i] * arg;
    return resultArr;
}


var arr = [1, 2, 3, 4];
var arrReturned = processArray(arr, -1);
// arrReturned would be [-1, -2, -3, -4]
console.log(arrReturned);