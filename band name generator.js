// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.
//
// dolphin -> The Dolphin
//
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with 
// the first and last letter, combined into one word like so (WITHOUT a 'The' in front):
//
// alaska -> Alaskalaska
//
// europe -> Europeurope
//
// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?

function bandNameGenerator(str) {
    
    function bandNameGenerator(str) {


        //use the charAt() method to compare elements at the first and last index of str.
        console.log(str.charAt(str.length))
        // if the first and last elements are the same, make x === a capitalized version of the first letter, + the rest of the word.
          if(str.charAt(0) === str.charAt(str.length-1)){
             let x = (str.charAt(0).toUpperCase()+ str.slice(1)); 
             let y = str;
             y = y.replace(y.charAt(0), ''); // replace the copy word with itself, but remove the first character
        
             return(x + y); // frankenstein the capitalized first word with the mutilated second word and return it for public consumption.
          }else{
              let x = "The "; // otherwise, make x into the string "The ",
              x = x + str.charAt(0).toUpperCase()+ str.slice(1); // then make it "The " plus the capitalized first element of str + the rest of str (using slice to chop off the uncapitalized index 0, to make room for 'str.charAt(0)')
              return (x); 
          }
      }
  }

  // admission: after 10 minutes of struggling with this one, I found someone else's answer to it online, studied it, rewrote it my way, and annotated each step to make sure I understood what was going on.


console.log(bandNameGenerator('knife'), 'The Knife');
console.log(bandNameGenerator('tart'), 'Tartart');
console.log(bandNameGenerator('sandles'), 'Sandlesandles');
console.log(bandNameGenerator('bed'), 'The Bed');