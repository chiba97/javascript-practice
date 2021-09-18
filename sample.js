var str = "webcamp"

function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()

function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}

let alertString;
alertString = addString("WebCamp");

alert(alertString);


