//*************problem -01************ */
console.log("man\"".length)

//*************problem -02************ */
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
// console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


const str = "Bravenewworld";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6

//*************problem -03************ */
const tr = "To be, or not to be, that is the question.";

console.log(tr.startsWith("To be")); // true
console.log(tr.startsWith("or not to be")); // false
console.log(tr.startsWith("not to be", 10)); // true

//*************problem -04************ */
console.log(tr.toUpperCase());
console.log(tr.toLowerCase());


//*************problem -05************ */
let str2 = "please gives rs 1000"
// let amount = str2.slice("please gives rs ".length)
let amount = Number.parseInt(str2.slice(16))  //Number.parseInt=convert string to number
console.log(amount)
console.log(typeof amount)

//*************problem -06************ */
let i ="manoj"
i[2]="k"  //string can not be changeable and not gives error
console.log(i)