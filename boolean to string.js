// In this programming exercise, you're going to learn about functions, boolean (true/false) values, strings, and the if-statement.
//
// A function is a block of code that takes an input and produces an output. In this example, boolean_to_string is a function whose 
// input is either true or false, and whose output is the string representation of the input, either "true" or "false".
//
// A common idea we often want to represent in code is the concept of true and false. A variable that can either be true or false is 
// called a boolean variable. In this example, the input to boolean_to_string (represented by the variable b) is a boolean.
//
// Lastly, when we want to take one action if a boolean is true, and another if it is false, we use an if-statement.
//
// For this kata, don't worry about edge cases like where unexpected input is passed to the function. You'll get to worry about 
// these enough in later exercises.


function booleanToString(b){
    
    // initially I thought it was asking me to return either "true" or "false" + a corresponding sentence string (see var ans), so that's why that is there. It passed the tests without me cleaning that bit out though :P

    var booly;
    var ans;

    if (b === true){
        ans = 'When we pass in true, we want the string "true" as output';
        booly = "true";
    } else if (b === false){
        ans = 'When we pass in false, we want the string "false" as output';
        booly = "false";
    }

    return booly

  }


console.log(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
console.log(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');