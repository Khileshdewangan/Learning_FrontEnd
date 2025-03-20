//spread in Arrays
const num = [1, 2, 3, 4, 5, 6, 7, 8];
const newnum = [...num];
// console.log(newnum);


const obj = {
    email: "abc@gmail.com",
    password: "123456"
}
// console.table(obj);



const obj1 = { ...obj, id: "1001" };
// console.table(obj1);


const str = "hello";
// console.log(str);


const str1 = { ...str };      //String convert single charecter as object
console.table("dekh  -----------------" , str1)

const n = [10, 20, 30, 40, 50, 60];
const n1 = { ...n };
console.table(n1);     // convert as object




//Rest
function sum(...args) {
    return args.reduce((sum, el) => sum + el)
}

function min(...args) {
    return args.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    })
}

// console.log(max(1,2,5,10,8,3,6,2));
// console.log(min(1,2,5,10,8,3,6,2));


//destructing in array
let arr = ["abc", "pqr", "xyz", "khi"];
// let a = "abc";
// let b = "pqr";
// let c = "xyz"

// let[a,b,c] = arr;
let[a,b,...c] = arr;   

console.log(arr);
// console.log(a);
// console.log(b);
console.log("c :", c);




//destructing in object
let std1 ={
    id:101,
    age:24,
    class:10,
    username:"khilesh",
    password:"789456",
    subject :["hindi", "english", "maths", "science"]
}

// let id=101;
// let age=24;
// let username="khilesh";
// let password=789456

// let{username:user,password:secret} = std1;
// console.log(user);
// console.log(secret);

// let{username,password} = std1;
// console.log(username);
// console.log(password);

let{username,password,city:place="bhilai"} = std1;
// console.log(username);
// console.log(password);
// console.log(city);
console.log(place);



let newarr = arr.map((el)=>{
    return el.toUpperCase();
})
console.log(newarr);