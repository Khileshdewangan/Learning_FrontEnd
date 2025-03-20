let arr = [
    {
        name: "khilesh",
        age: 26
    },
    {
        name: "khilesh",
        age: 26
    },
    {
        name: "khilesh",
        age: 26
    }
];

// let seq=(arr.forEach()=>{
//     console.log();
// });


let seq = () => {
    console.log(arr)
}


// seq();
arr.forEach(e => console.log(e));



// map
let num = [2, 5, 8, 9, 6, 3];
let x = num.map(el => {
    console.log(el);
    return el + 2;
});
console.log(x);

let x2 = num.map(el => el + 2);
console.log(x2);



// filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let y = numbers.filter(el => el % 2 == 0);
console.log("even number");
console.log(y);


let y2 = numbers.filter(el => el % 2 != 0);
console.log("odd number");
console.log(y2);

console.log("<----------------------------------------------------->");




let a = [5,8,9,20,15,14];

//Arrays map methos
let x_2 = a.map((el, idx)=>{
    console.log(el, idx);
    return el+1;
})
console.log(x_2);



//Arrays filter methos
let f = a.filter((el)=>{
    return el>10;
    // return el%2==0;
})
console.log(f);



//Arrays reduce methos
let arr2 = [1,2,3,4,5,6,7,8,9];
let newArr = arr.reduce((a,b)=>{       
        return a+b
})
console.log(newArr);


let newArr2 = (a,b) => {
    return a*b;
}  
console.log(arr.reduce(newArr2));
