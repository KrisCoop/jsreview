// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//==============


// SO, I will probably want reduce here:

function sumGuy(x, y) {

    let arr1 = x.reduce((accumulator, element) => accumulator + element, 0)
    let arr2 = y.reduce((accumulator, element) => accumulator + element, 0)

    return arr1 + arr2


}

console.log(sumGuy([1,2,3,4], [1,2,3,4]))
