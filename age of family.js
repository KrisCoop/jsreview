//  At the annual family gathering, the family likes to find the oldest living family member’s age 
// and the youngest family member’s age and calculate the difference between them.
// 
//  You will be given an array of all the family members' ages, in any order. The ages will be given 
// in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array 
// with [youngest age, oldest age, difference between the youngest and oldest age].

let arr1 = [5,6,3,4,2,1,8]

function findAges(x){

    // use sort() to list the array items from smallest to largest and place them in a new variable array.
    // take the first and last indexes, perhaps by assigning them each a variable.
    // subtract the smaller index from the larger, and set the result to a 4th variable.
    // create a new array (5th variable) and compose it thus: [smallest, largest, difference] by inserting the pre-defined 
    //////  variables in the correct index slots.
    // return the new variable.

    let newArr = []
    newArr = x.sort(function(a, b){return a - b});
    console.log(newArr)

    let small = newArr[0];
    console.log(small)

    let large = newArr[newArr.length-1]
    console.log(large)

    let diff = large - small;
    console.log(diff)

    let ans = [small, large, diff];
    console.log(ans)

    return ans;

};

console.log(findAges(arr1))


// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});