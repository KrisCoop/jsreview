// You are given an initial 2-value array (x). You will use this to calculate a score.
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. 
// If neither is a number, return 'Void!'.
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub
//  arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].


function score(x) {

    // determine the datatypes of the 2 elements in array (x)
    // if both data types are numbers, return the sum.
    // if only one element is a number, return it and ignore the other.
    // if neither element is a number, return 'Void!'

    // once the above is done, return an array of sub-arrays; each index is identical and..
    /////  the number of indexes will be determined by the score above.

    // clean up and simplify the code..... a lot (as it turned out).

    var ans;

    if (typeof x[0] === 'number' && typeof x[1] === 'number'){
        ans = x[0] + x[1]
    } else if (typeof x[0] !== 'number' && typeof x[1] === 'number') {
        ans = x[1] 
    } else if (typeof x[0] === 'number' && typeof x[1] !== 'number') {
        ans = x[0]
    } else if (typeof x[0] !== 'number' && typeof x[1] !== 'number'){
        ans = 'Void!'
    }
    let ansArr =[];
    
    if(ans !== 'Void!'){
        for(let i = 0; i < ans; i++){
            ansArr.push(x)
        }
        return ansArr
    } else return 'Void!'
}

console.log(score([2,2]))
console.log(score([2,'nuh uh']))
console.log(score(['sorry','charlie']))



// couldn't find this one on codewars; apologies if it doesn't pass all the tests.
