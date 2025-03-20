function avg(a, b) {
   return a + b;
}

let h = (s) => {
   console.log("welcome : -> " + s)
}

h('khilesh');

let x = 2;
let y = 10;
console.log(avg(x, y));



const hello = () => {
   console.log("hii friends how are you")
   return "hi....."
}
function oneplusavg(x, y) {
   // console.log("done")
   return Math.round(1 + (x + y) / 2)
}
const sum = (p, q) => {
   return p + q
}

let a = 1;
let b = 6;
let c = 8;
console.log("avarage of a and b", oneplusavg(a, b))
console.log("avarage of b and c", oneplusavg(b, c))
console.log("avarage of a and c", oneplusavg(a, c))
console.log(sum(9, 4))
let v = hello()
console.log(v)

console.log("<--------------------------------------------------------------------------->");


//funtion in object
const calsi = {
   sum: function (a, b) {
      console.log(a + b);
   },
   sub: function (a, b) {
      console.log(a - b);
   },
   mul: function (a, b) {
      console.log(a * b);
   }
}

const calsi2 = {
   sum(a, b) {
      console.log(a + b);
   },
   sub(a, b) {
      console.log(a - b);
   },
   mul(a, b) {
      console.log(a * b);
   }
}

//call in console
// like : calsi2.sum(a,b)
// like : calsi.sum(a,b)


