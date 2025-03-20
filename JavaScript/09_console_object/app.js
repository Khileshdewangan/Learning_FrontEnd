// console.log(console);
console.log("this is console log ");
console.error("this is error");
console.warn("this is warning");
console.assert("this is assert");
console.info("this is info");
console.dir("this is use for documents as object");

obj = { a: 2, b: 4, c: 6, d: 8 };
console.table(obj);

// ---------------------------------------------------------------------------------------------------------------

console.time("forloop");
for (let i = 0; i < 5; i++) {
   console.log("hii");
}
console.timeEnd("forloop");

// ---------------------------------------------------------------------------------------------------------------


console.time("whileloop");
let j = 0;
while (j < 5) {
   console.log("hii");
   j++;
}
console.timeEnd("whileloop");
