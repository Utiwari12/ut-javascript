const heros = ["spiderman", "thor", "hulk", "ironman", "captain america"];
const dcHeros = ["Superman", "Batman", "Flash", "Arrow"];

//heros.push(dcHeros);
// console.log(heros);
// console.log(heros.length);
// console.log(heros[3][1]);
// console.log(heros[5][1]);

//const allHeros = heros.concat(dcHeros); //concat method returns a new array
//console.log(heros);
//console.log(allHeros);

//const all_newHeros = [...heros, ...dcHeros]; //spread operator returns a new array
//console.log(all_newHeros)

const anotherArr = [1,2,3 , [4,5,6], 7, [6,7,8], 9, 10, [3,4,5]];

//console.log(anotherArr.flat(2));

const flatArr = anotherArr.flat(Infinity); //Infinity returns a new array
console.log(flatArr)

console.log(Array.isArray("Upendra"));
console.log(Array.from("Upendra"));
console.log(Array.from({name: "Upendra"})); // intersting one
console.log(Array.of("Upendra"));

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = 500
let score6 = 600
let score7 = 700
let score8 = 800
let score9 = 900
let score10 = 1000

console.log(Array.of(score1, score2, score3, score4, score5, score6, score7, score8, score9, score10));