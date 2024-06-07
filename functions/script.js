// printGreeting

function printGreeting(name) {
    return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer"));


//printCool

function printCool(name) {
    console.log(`${name} is cool`);
}
printCool("Captain Reynolds"); 




//calculateCube

function calculateCube(sideLength) {
    const volume = Math.pow(sideLength, 3);
    console.log(volume);
}
calculateCube(5); 




//isVowel

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

console.log(isVowel("a")); 
console.log(isVowel("E")); 
console.log(isVowel("i")); 
console.log(isVowel("O")); 
console.log(isVowel("x")); 



//getTwoLengths

function getTwoLengths(string1, string2) {
    return [string1.length, string2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous")); 



//getMultipleLengths

function getMultipleLengths(arr) {
    return arr.map(str => str.length);
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



//maxOfThree 

function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(6, 9, 1)); 




///printLongestWord

function printLongestWord(arr) {
    let longestWord = "";
    for (let word of arr) {
        if (word.length > longestWord.length || (word.length === longestWord.length && arr.indexOf(word) < arr.indexOf(longestWord))) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])); 




