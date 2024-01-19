const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) gives an array with in an array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); to access the data of array within an array 

// const allHeros = marvel_heros.concat(dc_heros) concatenation returns a new array when we concatenate two or more arrays so we need to store that in another array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] 
//this method is called spread it distributes all the elements into an individual element then stores them in the new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
//this flat method is used to make a singular array without any depth so that it can be easily accessible 
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //checks whether this array exist or not
console.log(Array.from("Hitesh")) //converts this string into an array of characters
console.log(Array.from({name: "hitesh"})) // interesting (haven't understood what this is yet)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //this of method takes the variable that a user need to make an array out of them 