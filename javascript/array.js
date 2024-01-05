// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

// Array methods

//myArr.push(6)
//myArr.push(7);
//myArr.pop()

//myArr.unshift(9)
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr = myArr.join()

//console.log(myArr)
//console.log(newArr);

// slice and splice

//console.log("A",myArr)

const my1 = myArr.slice(0,3)
//console.log(my1);
//console.log("B",myArr);

const my2 = myArr.splice(1,3);
//console.log("C",myArr);
//console.log(my2);

const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

const allHereos = marvel_heros.concat(dc_heros)
// console.log(allHereos)

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7[5,8]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("HItesh"))
// console.log(Array.from("supreme"))
// console.log(Array.from({name : "hitesh"}));// interesting

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3))

