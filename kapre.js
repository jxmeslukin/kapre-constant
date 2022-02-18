
var myText = "" 

for (i = 1; i < 10000; i++) { 
if(i==297){

}
  if (keprekar(i) == "True") {
    myText = myText + "," + i.toString(); 
  }
}

document.getElementById("box").innerHTML = myText 

function keprekar(theNum) { 
  length = theNum.toString().length 
  sqrtNum = Math.pow(theNum, 2)
  txtSquare = sqrtNum.toString() 
  txtLength = txtSquare.length - length 
  lastBit = txtSquare.substr(txtLength, length) 
  firstBit = txtSquare.substr(0, txtSquare.length - length)
  theTotal = Number(firstBit) + Number(lastBit) 
  if (theTotal == theNum) { 
    return "True"
  } else {
    return "False"
  }
}

var kapConstNum = "0";
var number = document.getElementById('const').value;

function kapreConst(number) {

  
  var kapreString = number.toString();
  var kapreArray = kapreString.split("");

  var sortAs = kapreArray.sort();
  var sortDs = kapreArray.sort();
  sortDs = sortDs.slice().reverse();

  let joinSortAs = sortAs.join('');
  let joinSortDs = sortDs.join('');

  joinSortAs = Number(joinSortAs);
  joinSortDs = Number(joinSortDs);

  number = Number(number)

  var kapConstNum = number;

  if(kapConstNum != 6174) {
    var difference = Number(joinSortDs - joinSortAs)
    console.log(difference);
    number = difference
    kapreConst(number)
  }else{
    console.log(6174);
    console.log("found");
    return("")
  }

}