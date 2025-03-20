
// let sum = 0;
// sum = Number.parseInt(sum)
// for (let i = 0; i <= 10; i++) {
//     // console.log(i)
//     // console.log((i+1))
//     // sum = i+sum;
//     sum += i
// }
// console.log("sum of number " + sum + " is ")

let obj = {
    suman: 90,
    khilesh: 60,
    shailend: 80,
    ravi: 12,
}

//for in loop
for (let a in obj) {
    console.log("marks of " + a + " are " + obj[a])
}

//for of loop
for (let b of "khilesh") {
    console.log(b)
}




let num = [1, 5, 8, 3, 6];


//forEach
console.log(num);
num.forEach((el) => {
    console.log("sq is", el * el);
})


//Arrays.form 
let arr = "khilesh";
let arr2 = Array.from(arr);
console.log(arr2);



//for.....of
for (let i of num) {
    console.log(i);
}



//for.....in
for (let i in num) {
    console.log(i);
}

for (let i in num) {
    console.log(num[i]);
}
