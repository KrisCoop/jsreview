// // You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you 
// wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 
// pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much 
// do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."
// //
// // It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!
// //
// // There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the 
// paleolithic era B.) It will ask you for tree fiddy
// //
// // Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of 
// being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 
// 3.50 or three fifty.


function isLockNessMonster(s) {
    // set up a variable - Nessy - with a boolean value, default 'false'.
    let Nessy = false;

    // use s.includes() to see if s contains the string 'tree fiddy', '3.50'
    if (s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')){
        Nessy = true;
    }
    
    // if true, then change the value of Nessy to 'true' and return it.
    return Nessy;
  };


  console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
Test.expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
Test.expect(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));