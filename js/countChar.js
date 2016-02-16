/*
A learning exercise of Mike Peiman, 12-2-2015
From http://eloquentjavascript.net/03_functions.html#p_N7xZ5k5OET
Purpose: Counting characters of a specific type in strings
*/
var counterb = 0;
var counterB = 0;
var counterSum = 0;
function countBs(myString) {
	for (var i = 0; i < myString.length; i++) {
		/*
		damn I just want to play DOTA2 right now. but this is the path to the future I have decided on, 
		the future I have strived for years to see and orient towards,
		and most importantly: this is the future my daughter deserves. I have work to do. 
		*/
	console.log("Current iteration is " + i);
		if (myString.charAt(i) == "B") { 			
          	counterB++;
			}
      	else {
          console.log("No B there!");
		}
      counterSum = counterb + counterB;
}
  console.log("There were " + counterSum + " B's in that string.");
}
  console.log("There were " + counterSum + " B's in that string.");

// === now expand to accept custom char

var charCounter = 0;
var myChar = "";
function countChar(myString, myChar) {
	for (var i = 0; i < myString.length; i++) {
		/*
		damn I just want to play DOTA2 right now. but this is the path to the future I have decided on, 
		the future I have strived for years to see and orient towards,
		and most importantly: this is the future my daughter deserves. I have work to do. 
		*/
      console.log("Current iteration is " + i);
		if (myString.charAt(i) == myChar) { 			
          	charCounter++;
			}
      	else {
          console.log("No " + myChar + " there!");
		}
}
  console.log("There were " + charCounter + " " + myChar + "'s in that string.");
}



countBs("BBCabacedBabrabbBB");
// countChar("BBCabacedBabrabbBB", "a");
console.log("There were " + counterSum + " B's in that string.");
console.log("There were " + charCounter + " " + myChar + "'s in that string.");

/* confirmed both working on eloquentjavascript website. 
pleased with my progress in learning (refreshing myself on?) on these concepts. 

After the fact: stoked to have just setup a JS console in sublime text, using this simple resource:
http://www.wikihow.com/Create-a-Javascript-Console-in-Sublime-Text

This runs in ST now. And I learned to ensure all variables I want to access outside of the functions that determine their values,
I must declare/initialize in the global/outer scope first. I succeeded in getting those final console.log statements to run, 
though I realize they do not belong outside/below the function call.
*/
function countCharClean(myString, myChar) {
	for (var i = 0; i < myString.length; i++) {
		/*
		damn I just want to play DOTA2 right now. but this is the path to the future I have decided on, 
		the future I have strived for years to see and orient towards,
		and most importantly: this is the future my daughter deserves. I have work to do. 
		*/
		if (myString.charAt(i) == myChar) { 			
          	charCounter++;
			}
      	else {}
}
  console.log("There were " + charCounter + " " + myChar + "'s in that string.");
}
countCharClean("BBCabacedBabrabbBB", "a");
/*
made a "clean" version, without the loop-and-logic-revealing console.logs. Is this TDD?
also commented out "non-clean" version function call, realizing that with the global variable charCounter value
would include both function's results.
*/