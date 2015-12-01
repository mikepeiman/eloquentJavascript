var hashmark = '#';
var hashmachine = function(howmanytimes) {
  for (var counter = 0; counter < howmanytimes; counter++) {
    console.log(counter + 1);
    console.log(hashmark);
    hashmark += '#';
  }
  }
  
hashmachine(7);