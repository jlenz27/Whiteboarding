//URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

function replaceSpace(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += "%20";
    } else {
      result += string[i];
    }
  }
  return result;
}
//recurrsion
function replaceSpaceRec(string){
if(!string){
  return '';
}
if (string[0] === ' ') {
  return '%20' + replaceSpaceRec(string.slice(1));
}
return string[0] + replaceSpaceRec(string.slice(1));
}

console.log(replaceSpace("this is a test"));
console.log(replaceSpaceRec("this is a test"));


// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this

function removeDup(array) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!resultArray.includes(array[i])) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

//recurssion
function removeDupRec(array){
  if (array.length === 0) {
    return [];
  }
  let firstElement = array[0];
  let remaining = array.slice(1);
  let finalArray = removeDupRec(remaining);
  if (finalArray.indexOf(firstElement) === -1){  //If the first element does not exist in the new array, it is added to the beginning of the array using the unshift method, th
    finalArray.unshift(firstElement);           // this method is not effient in big arrays but demonstrates the use of recurssion 
  }
  return finalArray;
}

console.log(removeDup([7, 9, "hi", 12, "hi", 7, 53]))
console.log(removeDupRec([7, 9, "hi", 12, "hi", 7, 53]))


// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

function repeatedChar(string) {
  let resultString = "";
  let stringCount = 1;
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let nextChar = string[i + 1]
    if (currentChar === nextChar) {
      stringCount++;
    }else if (stringCount < 2){
      resultString += currentChar;
    }
    else {
      resultString += stringCount + currentChar;
      currentChar = string[i];
      stringCount = 1;
    }
  }
  return resultString;

}

console.log(repeatedChar("aaabccdddda"));


// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean

function checkString (string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true
}

console.log(checkString("hello"));
console.log(checkString("copyright"));