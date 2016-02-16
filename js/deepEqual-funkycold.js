
/* 
* Big insight into recursion in studying various solutions to this EloquentJavascript chapter 4 code problem.
This example from https://funkycold.wordpress.com/2015/04/12/learning-javascript-eloquent-js-ch4-data-structures-objects-and-arrays/
was the 4th example I studied. 
*/

function deepEqual(obj1, obj2){
  if(obj1 === obj2){
    return true;
  }
  
  if(obj1 == null || obj2 == null){
    return false;
  }
  
  if(typeof obj1 === 'object' && typeof obj2 === 'object'){
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if(keys1.length !== keys2.length){ //check key length equality
      return false;
    }
    for(var i in obj1){ //iterate over all the keys
      if(deepEqual(obj1[i], obj2[i]) === false){ //check if each values are equal
        /*
        *
        *
        MSP: this is where I had my insight, that function objects are things themselves, as well as containing things;
        and that a function can be recursive precisely because of this property of arrays and objects as being things themselves,
        as well as containing things. 

        So, function arguments are empty containers, basically meaningless-unless-semantic labels or pointers;
          as containers, they can contain any item or object, large or small, whole or part;
          as labels, they can define any item or object, large or small, whole or part.
          as pointers, they can point to any item or object, large or small, whole or part.

        To clarify further if possible: function arguments can be any data type in the language. Integer, string, boolean,
        array, array-element, object, object-property, object-property-value, etc. This should probably be obvious,
        but I had not grokked that before. This will help my thinking about program logic immensely.
         
        The magic of recursion is when we write some function containing operations we want to perform on the
        parts of a whole (elements of an array or properties of an object); then, from inside of that function, 
        we call the outer function in order to perform those operations (by some kind of loop or test) 
        on the elememts of our array(s) or the properties of our object(s).

        *
        *
        */
        return false; //if not we are sad
      }
    }
    return true; //if all are equal happy
  }
  
  return false;
}
/*
* His preliminary code block, below
*/

function deepEqual1(obj1, obj2){
  if(obj1 === obj2){ //checks value or identity
    return true;
  }
  if(obj1 == null || obj2 == null){ //checks if one are equal to null
    return false;
  }
  if(typeof obj1 === 'object' && typeof obj2 === 'object'){
    //object step
    //MSP comment: this is where I realized that
    return true;
  }
  //otherwise just return false.
  return false;
}