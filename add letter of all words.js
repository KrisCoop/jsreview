// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.


// use split(" ") to separate the words into an array
// use string.length on each index to see how many letters each index contains.
// using line 3 above as an example, what if we replaced "apple" with `"apple " + apple.length()` ?
// going to try that...

// function addNum(e){

//     let x = e.split(" ");
//     console.log(x)

//     let num1 = x[0].length;
//     console.log(num1)

//     let num2 = x[1].length;
//     console.log(num2)

//     let newArr = []

//     newArr = [`${x[0]}` + " " + `${num1}`, `${x[1]}` + " " + `${num2}`]
    

//     console.log(newArr)

// }

// The previous solution works for a two word string... but I realized that I needed 
//something that would work regardless of the length of the string...

function addNum(e){

    let x = e.split(" ");
    console.log(x)
    //do a for loop or higher order function to go over the array and put the length in at each index.
    // .map seems like the best solution to me.

    return x.map((element) => {
        return element + " " + element.length
    })
}

console.log(addNum('you will win'))
addNum('you will win')