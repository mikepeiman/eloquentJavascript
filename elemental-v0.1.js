function listElemental(elementsInput) {
  var element = {
    elementName: "",
    elementCreates: "",
    elementControls: "",
    elementCreatedBy: "",
    elementControlledBy: "" };
  var elementList = [];
  var lenArray = thisArray.length;
  var lenElement = element.length;
  var elementsInput = document.getElementById("elementsInput").value;
  var elementsInputArray = elementsInput.split(",");
  document.write(elementsInputArray);
  document.getElementById("printLength").innerHTML = "The length of this array is " + elementsInputArray.length;

  document.getElementById("lenArray").innerHTML = ("This array is " + lenArray + " long.");
  document.getElementById("element").innerHTML = "elementList at current index is " + elementList[index];

  for (var index = 0; index < len; index++) {
  	document.write("<p>The index sits at " + index + ".</p>");
  	document.getElementById("indexCount").innerHTML = ("The index sits at " + index + ".");
    if (index === (len - 2)) {
      console.log("Index is currently thisArray.length - 2");
      elementList[index] = { 
        elementName: thisArray[index],
        elementCreates: thisArray[index + 1],
        elementControls: thisArray[0],};

    }
    else if (index === (len - 1)) {
      console.log("Index is currently thisArray.length - 1");
      elementList[index] = { 
        elementName: thisArray[index],
        elementCreates: thisArray[0],
        elementControls: thisArray[1], };

    } else {
      document.write("<p>The index sits at " + index + ".</p>");
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
  document.getElementById("element").innerHTML += "elementList is: " + elementList;
}
   
return elementList;
};