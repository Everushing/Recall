//?========== Arrays definition

const names = ['ana', 'john', 'alex'];

console.log(names);

console.log(names.lenght);

//console.log(names[0]);

for(let i = 0; i < names.lenght; i++) {
    console.log(names[i]);
}

//
const movies = ['caddyshack', 'Interstellar','scarface'];

console.log(movies);

movies[0]= 'Batman';
movives[4]= 'toy story';

console.log(movies[3]);
console.log(movies);

//
let firstMovie = movies[0];

console.log(firstmovie);

movies[10] = 'sherk'
console.log(movies)

for (let i = 0; i < movies.lenght; i++) {
    console.log
}









//
const yourColors = ['yellow', 'purple','pink'];
const myColors = ['red','blue','green']
console.log(myColors);
console.log(yourColors);

const ourColors = myColors.concat(yourcolors);


console.log(ourcolors)

const myColorsCopy = myColors; //make a copy 

myColors.push('gray'); 

console.log(mycolors);
console.log(mycolorscopy);

const allColorsString = ourColors.join(',');
console.log(allColorsString);

console.log(`i like ${allColorsString}`);

//push pop, shift, unshift 

const topMovies = ['batman'];

//add to the end of the array 

topMovies.push('trading places','antitrust');

//add to the start of array

topMovies.unshift('')



