/**
 * Medium Challenges
 *
 * Q1 Falsy or Truthy
 *
function filterOutFalsy(element1, element2) {
  if (!element1) {
    return element1;
  } else {
    return element2;
  }
}
console.log(filterOutFalsy(0, 500));
 *
 *with ternery
 function flasyOrTruthy(elem1, elem2) {
     return !elem1 ? elem1 : elem2
 }
  console.log(flasyOrTruthy(0, 5))
 * 
 * 
 */

/**  
 * Q2  Return the length of any given array
 * 
 * 
function arrLength(arr) {
  return arr.length;
}
console.log(arrLength([1, 2, 3,]));

function arrLength(arr) {
  return arr.length;
}
console.log(arrLength([5, 0, -4, 1]))

function arrLength(arr) {
  return arr.length;
}
console.log(arrLength([]))
 * 
 * 
*/

/**  
 * Q3 Get the last element in an array

function lastElem(arr) {
  return arr[arr.length -1];
}
console.log(lastElem([3, 2, 0, 6, 2]));
 * 
 * 
 * 
 * 
*/

/**  
 * Q4 Find the sum of an array

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i]
  }
  return sum;
}
console.log(arrSum([2, 2, 2, 5, 7, 2]));
 * 
 * 
*/

/** 
 * Q5 Add up the numbers from a single number
 * 
function progressiveSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; ++i) {
    sum = sum + i
  }
  return sum
}
console.log(progressiveSum(3));
 * 
 * 
*/

/**  \
 Q6 Calculate the time
 * 
 function calcTime(seconds) {
   let timerMinutes = Math.floor(seconds / 60);
   let timerSeconds = seconds % 60;
 
   if (timerMinutes.toString().length === 1) {
     timerMinutes = "0" + timerMinutes;
   }
 
   return timerMinutes + ":" + timerSeconds;
 }
 console.log(calcTime(70));
 * 
 * 
*/

/**  
 * Q7 Find the largest number
 * 
function getMax(arr) {
  let max = arr[0]
  for (let i = 3; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr [i]
    }
    return max;
  }
}

console.log(getMax([-100, -200, -300, 500]))
 * 
 * 
 * 
*/

/** 
 * Q8 Reverse a string
 * incrementing for loop 
function reverseString(str) {
  let reversedsString = '';
  for (let i = 0; i < str.length; ++i) {
    // This is how you loop though every character in a string
    reversedsString = str[i] + reversedsString;
  }
  return reversedsString;
}

console.log(reverseString('Firat'))
 * 
*/
/**  
 * Q8 decrementing for loop
 * 
function reverseString (str) {
  let reversedString = '';
  for (let i = str.length -1 ; i >= 0; --i)
  {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverseString('Firat'))
 *  
*/

/**  
 * Q8 array reverse property
 * array has its own reverse property and its just the array that can do that
 * 
 * you can convert an string into an array by splitting it and we can convert it back into an array by adding the join property followed by empty parantheses
function reversedString(str) {
  return str.split('').reverse().join();
}
console.log(reversedString('Firat'));

 * 
*/


/**  
 *
 * Q9 Turn every element in an array to 0
 * 
 * way 1
function convertToZeros(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0
            
        }
        return arr
    }
console.log(convertToZeros([5, 100, 0]));
 * 
 * we can also create a new variable
function convertToZeros(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i)
    {
        newArr[i] = 0
    } 
    return newArr;
}

console.log(convertToZeros([5, 100, 0]));
 * 
 * Solution 2 fill method
 * 
function convertToZeros(arr) {
    return new Array(arr.length).fill(0)
}
console.log(convertToZeros([5, 100, 0]))
 * 
 * 
 * solution 3 map method
 * 
function convertToZeros(arr) {
    return arr.map (elem => 0);
}
console.log(convertToZeros([5, 100, 0]))
 * 
 * 
 * 
 * 
 * 
*/
/**  
 * Q10 Filter out all the apples
 * 
 * Solution 1 :  for loop 
function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i)
    if (arr[i] !== 'Apple')  {
        noApples.push(arr[i])
    }
    return noApples;
}   
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
 * 
 * 
 * Solution 2 : filter method
 * 
 * 
function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple' )
}
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
 * 
 * 
 * 
 * 
 * 
*/

/**
 * Q11 Filter out all the falsy values, similar to the previous questions but now with booleans

function filterOutFalsy(arr) {
    //filter method
  // the double exclamation mark !! converts the element to an boolean 
  //and we telling if the boolean is equal to true then we want to return it
  return arr.filter((elem) => !!elem === true);
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));
 *

// for loop method
function filterOutFalsy(arr) {
    let truthyArr = [];
    for (let i = 0; i < arr.length; ++i) {
    if (!!arr[i] === true) {
        truthyArr.push(arr[i])
    }
    }
    return truthyArr
}

console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false, 0, null, 'null']))
 *
*
//Q12 Truthy to true, Falsy to false
// perfect I got it right myself ahhahahah siuuuuuu
*
function convertToBoolean (arr) {
    return arr.map (elem => !!elem);
}

console.log(convertToBoolean([500, 0, "Firat", "", []]))
*remember the empty array would not be true if we add arr.length to it, because it would equal zero and 0 is falsy  
thats it for the medium challenges lets get to the next piece of challenges !
*/


