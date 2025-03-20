let a = [2, 45, 49, 30, null, false, "apsent"];

console.log(a);
console.log(a[8]);
a[8] = "new member"; //Adding new value in array in index:8


//Array acesess
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[5]);
console.log(a[8]);
console.log(a[15]);

a[0] = 333333;      //change the value of array index of 0
console.log("change the value of array index of 0 : ", a[0]);



//Array methods : 1(length)
console.log("lenth is  : " + a.length);
a[8] = 55
console.log("change value of a[8]]  : ");
console.log(a[8]);
console.log("---------------------------------------------------");



//Array methods : 2 (join() and typeof())
let x = [10, 20, 30, 40, 50, 60];
let y = x.toString();
console.log(typeof (x));
console.log(typeof (y));
let z = x.join("_");
console.log(z + "  " + typeof (z));
console.log("---------------------------------------------------");


//Array methods : 3 (push() and pop())
let num = [7, 89, 45, 48, 25, 12];
console.log(num);
let r = num.pop();    //pop method return popped element
console.log("popped element is :" + r);
console.log(num);

num.push(1000);
console.log("pushed in array : " + num);
console.log("---------------------------------------------------");



//Array methods : 4 (shift() and unshift())
let shit = [45, 78, 95, 25, 36];
console.log(shit);

console.log(shit.shift());
console.log(shit);

console.log(shit.unshift()); //return length of array
console.log(shit.unshift(20)); //add element in beggning the array and return lenth of array
// console.log(shit);
// console.log(shit.unshift());
console.log("---------------------------------------------------");








//delete operator not a method 
let num11 = [1, 2, 3, 4, 5, 6, 7];
console.log(num.length);

delete num11[0];
console.log(num11.length);
console.log(num11);
console.log("------------------------------------------------------------------------------------");

//Array method : 5 (concat)
let n1 = [10, 20, 30, 40, 50, 60];
let n2 = [11, 22, 33, 44, 55, 66,];
let nwArray = n1.concat(n2);
let nwArray2 = n1.concat(n2, num);
console.log("first two(n1 and n2) array concat : ", nwArray);
console.log("three(n1, n2, num) array concat : ", nwArray2);
console.log("n1 is  : ", n1);
console.log("n2 is : ", n2);
console.log("------------------------------------------------------------------------------------");



//imp funtion for sorting in javaScript
let compare = (a, b) => {
    return a - b;
}


let arr = [4, 55, 8, 20, 93, 15, 25, 95];
console.log("revrese before sorting", arr.reverse());
console.log(arr.sort(compare));
console.log("revrese after sorting", arr.reverse());
console.log("------------------------------------------------------------------------------------");


//Array method : 6 (splice)
let x1 = [4, 75, 82, 93, 12, 45, 36];
let deletedvalue = x1.splice(2, 3, 100, 1002, 1003, 2102);
console.log(x1);
console.log(deletedvalue);
console.log("------------------------------------------------------------------------------------");


//Array method : 7 (slice)
let z1 = [20, 40, 50, 90, 70];
let newz = z1.slice(1, 3);
console.log(newz);
