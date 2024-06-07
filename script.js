

let yourMovies = ['caddyshack', 'interstellar', 'scarface'];
let myMovies = ['batman', 'the count of monte cristo', 'shrek'];

const ourMovies = myMovies.concat(yourMovies);
console.log(ourMovies);


//?=========== Join
const movieString = yourMovies.join(' and ');
console.log(movieString);

//?============ push 









function computeArea(width, height) {
    const area = width * height;
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
}
console.log(computeArea(5, 8)); 




/////
////
const planetHasWater = function(planet) {
    
    const lowercasePlanet = planet.toLowerCase();
    return lowercasePlanet === "earth" || lowercasePlanet === "mars";
};


console.log(planetHasWater("Earth")); 
console.log(planetHasWater("Mars")); 
console.log(planetHasWater("Jupiter"));
console.log(planetHasWater("VENUS")); 

/////////// default pramaters 
