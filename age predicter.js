// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.



function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

    let agesList = [age1,age2,age3,age4,age5,age6,age7,age8]
    console.log(agesList)

    agesSquared = []
    for (var i = 0; i < agesList.length; i++){
        agesSquared.push(agesList[i] * agesList[i]);
    }

    console.log(agesSquared)

    let ageSum = agesSquared.reduce((acc, elem) => acc + elem, 0)
    console.log(ageSum)

    let ageRoot = Math.sqrt(ageSum)
    console.log(ageRoot)

    let ageRootDiv = ageRoot / 2;
    console.log(ageRootDiv)

    let ageRound = Math.floor(ageRootDiv);
    console.log(ageRound)

    return ageRound;

} 

// this long code I wrote passed all the tests on codewars (when I found it). Apparently there is a much shorter solution,
// which uses Math.hypot() to 'return the square root of the sum of squares of its arguments'. Wow.


console.log(predictAge(65,60,75,55,60,63,64,45))

//   Test.assertEquals(predictAge(65,60,75,55,60,63,64,45), 86);