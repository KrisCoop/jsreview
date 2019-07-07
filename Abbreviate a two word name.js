// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F


// function abbrevName(e){

    // create 2 empty arrays, firstName and lastName
    // use split(" ") to separate the names and assign them to their appropriate arrays.
    // new variable 'firstInit' = using splice() to take out and return the index 0 of firstName array, 
    // another new varriable 'lastInit' = using splice() to take out and return the index 0 of lastName array.
    // yet another variable, 'ans' =  `${firstInit}.${lastInit}`
    // return ans

//     let x = e.split(" ");
//     console.log(x)
//     let firstName = x[0];
//     let lastName = x[1]
//     console.log(firstName)
//     console.log(lastName)
//     let firstInit = firstName[0].toUpperCase()
//     console.log(firstInit)
//     let lastInit = lastName[0].toUpperCase();
//     console.log(lastInit)
//     let ans = `${firstInit}.${lastInit}`
//     return ans;
// }

// The above function works, I'm going to try to simplify it 

function abbrevName(e){

    let x = e.split(" ");
    return `${x[0][0].toUpperCase()}.${x[1][0].toUpperCase()}`
}

abbrevName("Sam Harris")


// Test.assertEquals(abbrevName("Sam Harris"), "S.H");
// Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
// Test.assertEquals(abbrevName("Evan Cole"), "E.C");
// Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
// Test.assertEquals(abbrevName("David Mendieta"), "D.M");