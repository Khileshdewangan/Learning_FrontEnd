// string is a collection of charector

let name1 = "khilesh";      //using double quote
let name2 = 'khilesh';      //using single quote
console.log(name2[8]);      //get charecter using index
console.log(name2[5]);


let boy1 = "khilesh";
let boy2 = "Dewangan";



// let sentance = 'boy1 is a friend of boy2'
// console.log(sentance);


//template literal example
//its a backtick(``) and its called string interpulation
console.log(`"${boy2}" is seurname of "${boy1}"`);


//Ecape sequence  
// let fruit ="ban\"n";
// let fruit ="ban\'ana";
// let fruit ="ban\n'ana";
// let fruit ="ban\t'ana";
// let fruit ="ban\"ana";
//"bana\"na" ,'bana\'na' ,'bana\nna' ,'bana\tna' ,'bana\rna' 
let fruit = "ban\rana";
console.log("fruit : " + fruit);
console.log("fruit : ");
console.log(fruit);


let stringname = "khileshDewangan\"";
// let stringname = "khileshDewangan";


// String methods
console.log("leth is  : " + stringname.length);
console.log(stringname.toUpperCase());
console.log(stringname.toLowerCase());



//slice method
console.log(stringname.slice(2, 5));
console.log(stringname.slice(5));


//replace method
console.log(stringname.replace("khile", "LOVE"));
console.log(stringname.replace("pach", "LOVE"));


//concat method
console.log(stringname.concat(" pach ", " LOVE ", stringname));


//trim method(only remove staring and ending space)
// let mystring = "            ram ANd Syam             ";
let mystring = "            ram    ANd    Syam             ";
console.log(mystring.trim());
console.log(mystring.trimEnd());
console.log(mystring.trimStart());






// NOTE : String is immutable
//means: main string cannot be change when we apply any method, its retuen new String. this is called String is immutable

// let n = "it is a charecter";
// for(i=0; i<n.length;i++){

// }













// console.log("<----------------------------------------------------------------------------------------->");
// // let nam = "khiles\"h"
// let nam = "khiles\"h"
// console.log(nam.length)
// console.log(nam.toLowerCase())
// console.log(nam.slice(2, 5))
// console.log(nam.slice(2))
// console.log(nam.replace("khiles\"", "dew"))


// let friend = "naman"
// console.log(nam.concat(" is a friend of ", friend, " ok"))


// let friend2 = "                meena         "
// console.log(friend2.trim())
// let f = "naman"
// for (let i = 0; i < f.length; i++) {
//     console.log(f[i])
// }


// let f2 = "naman "+"suman"
// console.log(f2)